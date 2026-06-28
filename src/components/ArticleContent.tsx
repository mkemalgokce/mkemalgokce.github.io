"use client";

import { useEffect } from "react";

export default function ArticleContent({ html }: { html: string }) {
  useEffect(() => {
    const gistElements = document.querySelectorAll(".gist-embed");
    gistElements.forEach((element) => {
      const username = element.getAttribute("data-gist-username");
      const gistId = element.getAttribute("data-gist-id");
      if (username && gistId) {
        element.innerHTML = "";
        const script = document.createElement("script");
        script.src = `https://gist.github.com/${username}/${gistId}.js`;
        element.appendChild(script);
      }
    });

    const style = document.createElement("style");
    style.textContent = `
      .gist-embed { margin: 2rem 0; }
      .gist .gist-file { border-radius: 0.75rem !important; border: 1px solid rgb(var(--border)) !important; }
      .dark .gist .highlight { background: #0d1117 !important; }
      .dark .gist .blob-code, .dark .gist .blob-code-inner { color: #c9d1d9 !important; }
      .dark .gist .blob-num { color: #6e7681 !important; }
      .dark .gist .gist-meta { background-color: #161b22 !important; color: #8b949e !important; }
      .dark .gist .gist-meta a { color: #58a6ff !important; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="prose prose-lg max-w-none dark:prose-invert prose-pre:p-0 prose-img:rounded-2xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
