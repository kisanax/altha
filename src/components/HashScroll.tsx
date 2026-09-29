"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Memastikan tautan ber-hash (mis. `/layanan#perizinan`) benar-benar menggulir ke
 * section tujuannya.
 *
 * Dua kasus yang ditangani:
 * 1. Halaman dibuka langsung dari URL ber-hash — browser sudah mencoba menggulir
 *    sebelum section-nya ter-render, jadi kita ulangi setelah hidrasi.
 * 2. Klik tautan hash ke halaman yang sedang aktif — pathname tidak berubah
 *    sehingga perlu mendengarkan event `hashchange`.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = (behavior: ScrollBehavior) => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior, block: "start" });
    };

    // `instant` agar halaman yang dibuka dari URL langsung tepat di section-nya.
    scrollToHash("instant");

    const onHashChange = () => scrollToHash("smooth");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
