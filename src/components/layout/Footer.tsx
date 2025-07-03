import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white mt-auto overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="text-center mb-8">
          {/* Logo/Brand */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Book className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  BookNest
                </span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Your digital library companion for seamless book management and
            discovery
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-medium text-gray-200 mb-1">
              &copy; {new Date().getFullYear()} BookNest. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Empowering readers, one book at a time.
            </p>
          </div>

          {/* Creator Credit */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-sm">Built with</span>
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-red-500 animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-gray-400 text-sm">by</span>
            </div>
            <a
              href="https://devsafix.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center"
            >
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text font-semibold text-sm group-hover:from-blue-300 group-hover:to-indigo-300 transition-all duration-300">
                Kawser
              </span>
              <svg
                className="w-3 h-3 ml-1 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>

              {/* Hover Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
