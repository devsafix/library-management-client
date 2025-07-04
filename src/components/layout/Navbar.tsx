import {
  AlignJustify,
  X,
  Book,
  Plus,
  FileText,
  Search,
  User,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "All Books", path: "/books", icon: BookOpen },
    { name: "Add Book", path: "/create-book", icon: Plus },
    { name: "Borrow Summary", path: "/borrow-summary", icon: FileText },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Book className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                BookNest
              </span>
              <span className="text-xs text-slate-400 -mt-1">
                Digital Library
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-semibold">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </NavLink>
              );
            })}
          </div>

          {/* Search and User Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <AlignJustify
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pb-6 pt-2 bg-gradient-to-b from-slate-900/95 to-slate-900 border-t border-slate-700/50 backdrop-blur-sm">
          <div className="space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:translate-x-1"
                    }`
                  }
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Search and User */}
          <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-slate-700/50">
            <button className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200">
              <User className="w-4 h-4" />
              <span className="text-sm">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
