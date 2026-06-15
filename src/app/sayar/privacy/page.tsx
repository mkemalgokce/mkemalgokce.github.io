import type { Metadata } from "next";
import { SayarNav, SayarFooter, SAYAR_EMAIL } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy Policy — Sayar",
  description: "How Sayar handles your data. Private by design: your finances stay on your device.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <SayarNav active="privacy" />

      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 leading-relaxed text-slate-600">
            <Section title="Overview">
              <p>
                Sayar is designed with privacy as a core principle. Your financial data belongs to
                you and only you. This policy explains how Sayar handles your information when you
                use the app.
              </p>
            </Section>

            <Section title="Data Collection">
              <p className="mb-4">
                <strong className="text-slate-900">Sayar does not collect personal data.</strong>{" "}
                The app runs entirely on your device. Every record, category and setting you create
                is stored locally on your iPhone or iPad.
              </p>
              <p>
                There are no servers storing your data, no account to create, and no tracking of
                your usage or behaviour inside the app.
              </p>
            </Section>

            <Section title="Data Storage">
              <p className="mb-4">
                All your data is stored locally using the secure storage provided by iOS, including:
              </p>
              <List
                items={[
                  "Income and expense records and amounts",
                  "Category information",
                  "Notes and descriptions",
                  "App preferences and settings",
                ]}
              />
            </Section>

            <Section title="iCloud Sync">
              <p>
                If you enable iCloud sync, your data syncs across your devices through your personal
                iCloud account. That data is encrypted and stored by Apple under their privacy
                practices. Sayar has no access to your iCloud data.
              </p>
            </Section>

            <Section title="Exporting Your Data">
              <p>
                Sayar lets you export your records to CSV or JSON at any time. Exported files are
                created on your device and shared only where you choose to send them.
              </p>
            </Section>

            <Section title="Third-Party Services">
              <p>
                Sayar does not integrate any third-party analytics, advertising or tracking
                services, and does not share your data with anyone.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                Your data is protected by your device&rsquo;s security features, including device
                encryption and Face ID / Touch ID where enabled. Because data never leaves your
                device (except through your own iCloud), there is no server-side breach risk.
              </p>
            </Section>

            <Section title="Your Rights">
              <p className="mb-4">Since all data stays on your device, you stay in full control:</p>
              <List
                items={[
                  "Delete any record or category at any time",
                  "Export your data for personal use",
                  "Remove all data by uninstalling the app",
                ]}
              />
            </Section>

            <Section title="Changes to This Policy">
              <p>
                This policy may be updated from time to time. Changes will be posted on this page
                with an updated date at the top.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this Privacy Policy? Email{" "}
                <a
                  href={`mailto:${SAYAR_EMAIL}`}
                  className="font-medium text-blue-600 underline-offset-2 hover:underline"
                >
                  {SAYAR_EMAIL}
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>

      <SayarFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
