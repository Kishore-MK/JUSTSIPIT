'use client';

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-violet-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
              JUSTSIPIT
            </Link>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">Product</a>
              <a href="#" className="text-gray-300 hover:text-white">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-32 pb-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">Investment Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Total Portfolio Value</h2>
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">$0</div>
            <div className="flex items-center text-green-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+2.45% today</span>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Current SIP Value</h2>
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">$ 0</div>
            <div className="flex items-center text-green-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+18.3% all time</span>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Monthly SIP Amount</h2>
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">$0</div>
            <div className="text-gray-400">
              Next payment in 8 days
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900">
            <h2 className="text-2xl font-semibold mb-6">Investment Performance</h2>
            <div className="h-64 w-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-violet-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 flex items-end">
                  <div className="w-1/12 h-12 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-14 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-10 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-20 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-18 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-24 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-16 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-22 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-18 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-20 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-24 bg-violet-500/40 rounded-t mx-1"></div>
                  <div className="w-1/12 h-22 bg-violet-500/40 rounded-t mx-1"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-violet-900">
            <h2 className="text-2xl font-semibold mb-6">Active SIP Plans</h2>
            <ul className="space-y-4">
              <li className="p-3 rounded-lg bg-gray-800/50 border border-violet-900/50">
                <div className="flex justify-between">
                  <span className="font-medium">Crypto Index Fund</span>
                  <span className="text-violet-400">$0/mo</span>
                </div>
                <div className="mt-2 text-sm text-gray-400">Next payment: Jul 15</div>
              </li>
              <li className="p-3 rounded-lg bg-gray-800/50 border border-violet-900/50">
                <div className="flex justify-between">
                  <span className="font-medium">Defi Yield Strategy</span>
                  <span className="text-violet-400">$0/mo</span>
                </div>
                <div className="mt-2 text-sm text-gray-400">Next payment: Jul 12</div>
              </li>
              <li className="p-3 rounded-lg bg-gray-800/50 border border-violet-900/50">
                <div className="flex justify-between">
                  <span className="font-medium">dApp Token Basket</span>
                  <span className="text-violet-400">$0/mo</span>
                </div>
                <div className="mt-2 text-sm text-gray-400">Next payment: Jul 22</div>
              </li>
              <li className="mt-4">
                <button className="w-full py-2 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-900/30 transition-all">
                  + Add New SIP Plan
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 