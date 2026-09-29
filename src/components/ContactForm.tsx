"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Halo, saya ingin konsultasi.",
      `Nama: ${data.get("name")}`,
      `Usaha: ${data.get("company") || "-"}`,
      `Email: ${data.get("email")}`,
      `Telepon: ${data.get("phone")}`,
      `Layanan: ${data.get("service")}`,
      `Pesan: ${data.get("message")}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-brand-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
  const labelClass = "mb-1.5 block text-sm font-medium text-brand-700";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Nama lengkap
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Nama Anda" />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Nama usaha
          </label>
          <input id="company" name="company" className={inputClass} placeholder="Opsional" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="nama@email.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Nomor WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            required
            className={inputClass}
            placeholder="08xxxxxxxxxx"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className={labelClass} htmlFor="service">
          Layanan yang dibutuhkan
        </label>
        <select id="service" name="service" className={inputClass} defaultValue={services[0].title}>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Konsultasi umum">Konsultasi umum</option>
        </select>
      </div>

      <div className="mt-4">
        <label className={labelClass} htmlFor="message">
          Detail kebutuhan
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClass}
          placeholder="Ceritakan singkat kebutuhan atau bidang usaha Anda"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
      >
        Kirim & lanjut ke WhatsApp
      </button>

      {sent && (
        <p className="mt-3 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700">
          Pesan Anda sedang dibuka di WhatsApp. Jika tidak terbuka otomatis, hubungi kami
          langsung melalui tombol WhatsApp di halaman ini.
        </p>
      )}
      <p className="mt-3 text-xs text-brand-400">
        Dengan mengirim, Anda menyetujui data Anda digunakan hanya untuk keperluan
        konsultasi ini.
      </p>
    </form>
  );
}
