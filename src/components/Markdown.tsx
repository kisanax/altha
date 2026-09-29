import type { ReactNode } from "react";

function inline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-brand-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    ),
  );
}

export function Markdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let ordered: string[] = [];
  let key = 0;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = paragraph.join(" ");
    blocks.push(
      <p key={`p-${key++}`} className="text-brand-700 leading-relaxed">
        {inline(text, `p${key}`)}
      </p>,
    );
    paragraph = [];
  };

  const flushList = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={`ul-${key++}`} className="space-y-2 pl-5 list-disc text-brand-700">
        {list.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {inline(item, `li${key}-${i}`)}
          </li>
        ))}
      </ul>,
    );
    list = [];
  };

  const flushOrdered = () => {
    if (ordered.length === 0) return;
    blocks.push(
      <ol key={`ol-${key++}`} className="space-y-2 pl-5 list-decimal text-brand-700">
        {ordered.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {inline(item, `oli${key}-${i}`)}
          </li>
        ))}
      </ol>,
    );
    ordered = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushOrdered();
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (line === "") {
      flushAll();
      continue;
    }

    if (line.startsWith("### ")) {
      flushAll();
      blocks.push(
        <h3 key={`h3-${key++}`} className="text-lg font-semibold text-brand-900 mt-6">
          {line.slice(4)}
        </h3>,
      );
      continue;
    }

    if (line.startsWith("## ")) {
      flushAll();
      blocks.push(
        <h2 key={`h2-${key++}`} className="text-2xl font-bold text-brand-900 mt-10">
          {line.slice(3)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("> ")) {
      flushAll();
      blocks.push(
        <blockquote
          key={`quote-${key++}`}
          className="border-l-4 border-brand-300 bg-brand-50 px-4 py-3 rounded-r-lg text-brand-700 italic"
        >
          {inline(line.slice(2), `q${key}`)}
        </blockquote>,
      );
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      flushOrdered();
      list.push(line.slice(2));
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      flushParagraph();
      flushList();
      ordered.push(line.replace(/^\d+\.\s/, ""));
      continue;
    }

    flushList();
    flushOrdered();
    paragraph.push(line);
  }

  flushAll();

  return <div className="space-y-4">{blocks}</div>;
}
