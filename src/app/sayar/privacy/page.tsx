import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/sayar" className="text-xl font-bold tracking-tight">
            Sayar
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/sayar/privacy" className="text-sm text-white font-medium">
              Privacy
            </Link>
            <Link href="/sayar/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
              Terms
            </Link>
            <a
              href="https://apps.apple.com/app/sayar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-10 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p>
                Sayar is designed with privacy as a core principle. We believe your financial data belongs to you and only you. This Privacy Policy explains how we handle your information when you use our expense tracking application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Collection</h2>
              <p className="mb-4">
                <strong className="text-white">We do not collect any personal data.</strong> Sayar operates entirely on your device. All expense data, categories, and settings you create are stored locally on your iPhone or iPad.
              </p>
              <p>
                We do not have servers that store your data. We do not require account creation. We do not track your usage or behavior within the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Storage</h2>
              <p className="mb-4">
                All your expense data is stored locally on your device using secure storage mechanisms provided by iOS. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Expense records and amounts</li>
                <li>Category information</li>
                <li>Notes and descriptions</li>
                <li>App preferences and settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">iCloud Sync</h2>
              <p>
                If you choose to enable iCloud sync, your data will be synced across your devices using your personal iCloud account. This data is encrypted and stored by Apple according to their privacy practices. We do not have access to your iCloud data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>
                Sayar does not integrate with any third-party analytics, advertising, or tracking services. We do not share your data with anyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                Your data is protected by the security features of your iOS device, including device encryption and Face ID/Touch ID if enabled. Since data never leaves your device (except through your personal iCloud if enabled), there is no risk of data breaches from our end.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="mb-4">
                Since all data is stored on your device, you have complete control over it:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Delete any expense or category at any time</li>
                <li>Export your data for personal use</li>
                <li>Delete all data by uninstalling the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the date at the top.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@sayar.app" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  support@sayar.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xl font-bold mb-1">Sayar</p>
              <p className="text-slate-500 text-sm">Simple expense tracking</p>
            </div>

            <div className="flex items-center gap-8">
              <Link href="/sayar/privacy" className="text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/sayar/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:support@sayar.app" className="text-slate-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Sayar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
