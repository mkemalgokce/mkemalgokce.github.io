import type { Metadata } from "next";
import { SayarNav, SayarFooter, SAYAR_EMAIL } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Terms of Service — Sayar",
  description: "The terms that govern your use of the Sayar expense tracking app.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <SayarNav active="terms" />

      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>

          <div className="mt-12 space-y-10 leading-relaxed text-slate-600">
            <Section title="Agreement to Terms">
              <p>
                By downloading, installing or using Sayar, you agree to these Terms of Service. If
                you do not agree, please do not use the app.
              </p>
            </Section>

            <Section title="Description of Service">
              <p>
                Sayar is a personal expense and income tracking app that helps you record,
                categorise and analyse your spending. It stores data locally on your device and
                works without an internet connection.
              </p>
            </Section>

            <Section title="License">
              <p className="mb-4">
                You are granted a limited, non-exclusive, non-transferable, revocable license to use
                Sayar for personal, non-commercial purposes. You may not:
              </p>
              <List
                items={[
                  "Copy, modify or distribute the application",
                  "Reverse engineer or attempt to extract the source code",
                  "Use the app for any illegal purpose",
                  "Sublicense or transfer your rights to use the app",
                ]}
              />
            </Section>

            <Section title="User Responsibilities">
              <p className="mb-4">You are responsible for:</p>
              <List
                items={[
                  "Maintaining the security of your device",
                  "Backing up your data regularly",
                  "The accuracy of the data you enter",
                  "Any decisions you make based on the app's data",
                ]}
              />
            </Section>

            <Section title="Disclaimer of Warranties">
              <p>
                Sayar is provided &ldquo;as is&rdquo; without warranties of any kind, express or
                implied. We do not guarantee the app will be error-free, uninterrupted or fit for a
                specific purpose. It is intended for personal tracking and is not a substitute for
                professional financial advice.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, we are not liable for any indirect,
                incidental, special, consequential or punitive damages, including loss of data,
                profits or business opportunities, arising from your use of Sayar.
              </p>
            </Section>

            <Section title="Data Loss">
              <p>
                We are not responsible for data loss caused by device failure, software updates or
                user error. Regularly backing up your device (and using iCloud sync) is recommended.
              </p>
            </Section>

            <Section title="App Store Terms">
              <p>
                Your use of Sayar is also subject to the Apple App Store terms and conditions. In
                case of conflict, the App Store terms prevail.
              </p>
            </Section>

            <Section title="Changes to Terms">
              <p>
                These terms may be modified at any time. Significant changes will be reflected by
                updating the date at the top of this page. Continued use after changes constitutes
                acceptance of the new terms.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                Access to the app may be terminated at any time for any reason. You may stop using
                the app at any time by uninstalling it from your device.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these Terms? Email{" "}
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
