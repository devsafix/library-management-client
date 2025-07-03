import bannerBook1 from "@/assets/book1.jpg";
import bannerBook2 from "@/assets/book2.jpg";
import bannerBook3 from "@/assets/book3.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Star, Users } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 10,000+ Book Lovers
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Discover Your Next
                <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Great Adventure
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Explore our carefully curated collection of bestsellers,
                timeless classics, and hidden gems. Join thousands of readers
                who've found their perfect book match.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Books Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25K+</div>
                <div className="text-sm text-gray-600">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/books">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-103 hover:from-amber-600 hover:to-orange-700 cursor-pointer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="inline-flex lg:mx-0 mx-auto items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </button>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[450px]">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-20 animate-pulse delay-1000"></div>

              {/* Book 2: Background left */}
              <div className="absolute top-12 left-8 transform rotate-[-15deg] hover:rotate-[-18deg] transition-all duration-500 hover:scale-105 group">
                <img
                  src={bannerBook2}
                  alt="Featured Book"
                  className="w-44 h-auto shadow-2xl rounded-lg ring-4 ring-white/50"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
              </div>

              {/* Book 3: Background right */}
              <div className="absolute top-20 right-8 transform rotate-[15deg] hover:rotate-[18deg] transition-all duration-500 hover:scale-105 group">
                <img
                  src={bannerBook3}
                  alt="Featured Book"
                  className="w-44 h-auto shadow-2xl rounded-lg ring-4 ring-white/50"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
              </div>

              {/* Book 1: Main centered book */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 hover:scale-110 transition-all duration-500 group z-10">
                <div className="relative">
                  <img
                    src={bannerBook1}
                    alt="Main Featured Book"
                    className="w-52 h-auto shadow-2xl rounded-lg ring-4 ring-white"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Floating badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Bestseller
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
