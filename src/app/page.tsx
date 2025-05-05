'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-violet-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
            <Link href="/">JUSTSIPIT</Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">Product</a>
              <a href="#" className="text-gray-300 hover:text-white">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Sign Up</a>
              <a href="#" className="px-4 py-2 rounded-full border border-violet-500 text-white hover:bg-violet-800 transition-all">Connect wallet</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl">
            <div className="text-sm text-violet-400 mb-4 uppercase tracking-wider">BENEFITS OF SIP IN CRYPTOCURRENCY</div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
              Invest Smarter<br />Grow Faster
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Systematic Investment Plans in crypto help mitigate volatility, encourage disciplined investing, and position you for long-term growth in digital assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-lg border border-violet-900/40 bg-black/30">
                <h3 className="font-medium mb-1 text-white">Reduced Volatility</h3>
                <p className="text-sm text-gray-400">Consistent investment strategy to minimize market fluctuation impacts</p>
              </div>
              <div className="p-4 rounded-lg border border-violet-900/40 bg-black/30">
                <h3 className="font-medium mb-1 text-white">Disciplined Approach</h3>
                <p className="text-sm text-gray-400">Prevents emotional decisions during market highs and lows</p>
              </div>
              <div className="p-4 rounded-lg border border-violet-900/40 bg-black/30">
                <h3 className="font-medium mb-1 text-white">Long-Term Growth</h3>
                <p className="text-sm text-gray-400">Position for growth in Web3, DeFi, and digital asset adoption</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/dashboard" 
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-violet-500 to-violet-700 rounded-full hover:from-violet-600 hover:to-violet-800 transition-all duration-300"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="relative w-80 h-80">
              <div className="absolute right-0 top-0 bg-violet-600/80 rounded-xl blur-2xl w-72 h-72 animate-pulse"></div>
              <div className="relative z-10">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Dashboard mockup with cards for analytics */}
                  <g transform="translate(60, 100)">
                    <rect x="0" y="0" width="180" height="80" rx="12" fill="#111111" stroke="#8B5CF6" strokeOpacity="0.5" strokeWidth="1"/>
                    <text x="15" y="30" fontFamily="Arial" fontSize="18" fill="white">$950.4</text>
                    <text x="15" y="55" fontFamily="Arial" fontSize="12" fill="#A78BFA">ETH Price</text>
                  </g>
                  
                  <g transform="translate(100, 30)">
                    <rect x="0" y="0" width="180" height="60" rx="12" fill="#111111" stroke="#8B5CF6" strokeOpacity="0.5" strokeWidth="1"/>
                    <text x="15" y="25" fontFamily="Arial" fontSize="14" fill="white">108</text>
                    <text x="15" y="45" fontFamily="Arial" fontSize="12" fill="#A78BFA">Active SIPs</text>
                  </g>
                  
                  <g transform="translate(150, 200)">
                    <rect x="0" y="0" width="160" height="70" rx="12" fill="#111111" stroke="#8B5CF6" strokeOpacity="0.5" strokeWidth="1"/>
                    <text x="15" y="30" fontFamily="Arial" fontSize="18" fill="white">$642.39</text>
                    <text x="15" y="50" fontFamily="Arial" fontSize="12" fill="#A78BFA">Monthly SIP</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900 hover:bg-gray-800/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Systematic Investing</h3>
            <p className="text-gray-400">Create automated SIP plans for consistent wealth growth over time.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900 hover:bg-gray-800/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Portfolio Analytics</h3>
            <p className="text-gray-400">Track and optimize your investment performance with AI-powered insights.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900 hover:bg-gray-800/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Investments</h3>
            <p className="text-gray-400">Advanced blockchain security for your financial portfolio and assets.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
