import Link from "next/link";

export default function SayarPage() {
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

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Available on App Store
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Track Expenses,
              <br />
              Not Complexity
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Simple expense tracking that just works. Add your expenses, organize by categories, and get clear insights into your spending habits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/app/sayar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </a>
              <a
                href="#features"
                className="text-slate-400 hover:text-white px-8 py-4 font-medium transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* App Preview */}
        <section className="pb-32 px-6">
          <div className="max-w-sm mx-auto">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-slate-950/50">
                <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-12 bg-slate-900 flex items-center justify-center">
                    <div className="w-24 h-6 bg-slate-950 rounded-full"></div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">Overview</h2>
                      <div className="w-10 h-10 bg-slate-800 rounded-full"></div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5">
                      <p className="text-emerald-100 text-sm mb-1">Total Spending</p>
                      <p className="text-3xl font-bold text-white">$2,450.00</p>
                      <p className="text-emerald-100 text-sm mt-2">This month</p>
                    </div>

                    {/* Categories */}
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-3">Categories</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-slate-900 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-lg">
                              🍔
                            </div>
                            <span className="font-medium">Food</span>
                          </div>
                          <span className="text-slate-400">$580</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-lg">
                              🚗
                            </div>
                            <span className="font-medium">Transport</span>
                          </div>
                          <span className="text-slate-400">$320</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900 rounded-xl p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-lg">
                              🛍️
                            </div>
                            <span className="font-medium">Shopping</span>
                          </div>
                          <span className="text-slate-400">$890</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-slate-400">
                Simple tools to take control of your finances
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  📊
                </div>
                <h3 className="text-xl font-semibold mb-3">Detailed Statistics</h3>
                <p className="text-slate-400 leading-relaxed">
                  Visualize your spending with beautiful charts and graphs. Understand where your money goes.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  🏷️
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Categories</h3>
                <p className="text-slate-400 leading-relaxed">
                  Create your own categories to organize expenses the way that makes sense for you.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  📱
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Entry</h3>
                <p className="text-slate-400 leading-relaxed">
                  Add expenses in seconds. Simple interface designed for speed and ease of use.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  📅
                </div>
                <h3 className="text-xl font-semibold mb-3">Monthly Reports</h3>
                <p className="text-slate-400 leading-relaxed">
                  Get monthly summaries of your spending habits. Track your progress over time.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  🔒
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-slate-400 leading-relaxed">
                  Your data stays on your device. No accounts, no cloud, no tracking. Just you and your data.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-2xl mb-5">
                  🌙
                </div>
                <h3 className="text-xl font-semibold mb-3">Dark Mode</h3>
                <p className="text-slate-400 leading-relaxed">
                  Beautiful dark interface that is easy on the eyes, day or night.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Tracking Today
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Download Sayar and take the first step towards better financial awareness.
            </p>
            <a
              href="https://apps.apple.com/app/sayar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
          </div>
        </section>
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
