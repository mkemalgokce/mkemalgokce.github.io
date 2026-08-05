"use client";

import { useMemo, useState } from "react";
import { TD_EMAIL } from "../../_components/SiteChrome";

const SUBJECTS = [
  "Bir sorun bildirmek istiyorum",
  "Özellik önerim var",
  "Abonelik / satın alma",
  "Gizlilik / veri talebi",
  "Diğer",
] as const;

const field =
  "td-sticker w-full rounded-[16px] bg-[rgb(var(--td-surface))] px-4 py-3 text-[15px] text-[rgb(var(--td-ink))] placeholder:text-[rgb(var(--td-ink-3))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--td-gold))]";

const label =
  "td-display mb-2 block text-[13px] font-extrabold uppercase tracking-wide text-[rgb(var(--td-pink))]";

/**
 * The site is a static export, so there is no endpoint to post to. The form
 * composes a well-formed mail and hands it to the visitor's mail app — nothing
 * is transmitted from the page itself.
 */
export function SupportForm() {
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [message, setMessage] = useState("");

  const mailto = useMemo(
    () =>
      `mailto:${TD_EMAIL}?subject=${encodeURIComponent(
        `Takı Defteri — ${subject}`,
      )}&body=${encodeURIComponent(`${message.trim()}\n\n———\nCihaz / iOS:\nUygulama sürümü:\n`)}`,
    [subject, message],
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
      className="td-sticker rounded-[22px] bg-[rgb(var(--td-surface-2))] p-6 sm:p-8"
    >
      <label className="block">
        <span className={label}>Konu</span>
        <select
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={field}
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className={label}>Mesajın</span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ne oldu, ne bekliyordun?"
          className={`${field} resize-y`}
        />
      </label>

      <button
        type="submit"
        disabled={!message.trim()}
        className="td-sticker td-press mt-6 inline-flex w-full items-center justify-center rounded-full bg-[rgb(var(--td-gold))] px-8 py-4 text-base font-bold text-[rgb(var(--td-on-accent))] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        E-posta uygulamasında aç
      </button>

      <p className="mt-4 text-[14px] leading-relaxed text-[rgb(var(--td-ink-2))]">
        Form hiçbir yere veri göndermez — yazdıkların cihazındaki e-posta uygulamasında hazır bir
        iletiye dönüşür, göndermeye sen karar verirsin.
      </p>
    </form>
  );
}
