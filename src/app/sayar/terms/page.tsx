import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/sayar" className="text-xl font-bold tracking-tight">
            Sayar
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/sayar/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/sayar/terms" className="text-sm text-white font-medium">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-400 mb-12">Last updated: January 2025</p>

          <div className="space-y-10 text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
              <p>
                By downloading, installing, or using Sayar, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Description of Service</h2>
              <p>
                Sayar is a personal expense tracking application designed to help you record, categorize, and analyze your spending. The app stores all data locally on your device and does not require an internet connection to function.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">License</h2>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use Sayar for your personal, non-commercial purposes. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Copy, modify, or distribute the application</li>
                <li>Reverse engineer or attempt to extract the source code</li>
                <li>Use the app for any illegal purpose</li>
                <li>Sublicense or transfer your rights to use the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Maintaining the security of your device</li>
                <li>Backing up your data regularly</li>
                <li>The accuracy of the expense data you enter</li>
                <li>Any decisions you make based on the app data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer of Warranties</h2>
              <p>
                Sayar is provided as is without any warranties, express or implied. We do not guarantee that the app will be error-free, uninterrupted, or meet your specific requirements. The app is intended for personal expense tracking and should not be used as a substitute for professional financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, profits, or business opportunities, arising from your use of Sayar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Loss</h2>
              <p>
                We are not responsible for any loss of data that may occur due to device failure, software updates, or user error. We recommend regularly backing up your device to prevent data loss.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">App Store Terms</h2>
              <p>
                Your use of Sayar is also subject to the terms and conditions of the Apple App Store. In case of any conflict between these terms and the App Store terms, the App Store terms shall prevail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes by updating the date at the top of this page. Your continued use of the app after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
              <p>
                We reserve the right to terminate your access to the app at any time for any reason. You may terminate your use of the app at any time by uninstalling it from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
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
              <Link href="/sayar/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sayar/terms" className="text-white text-sm">
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
