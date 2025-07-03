import { useGetBooksQuery } from "@/redux/api/book.api";
import type { IBook } from "@/types/book.types";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Star, Sparkles } from "lucide-react";

export default function RecentPublishBooks() {
  const { data, isLoading, error } = useGetBooksQuery({
    limit: 4,
    sortBy: "createdAt",
    sort: "desc",
    page: 1,
    filter: "",
  });

  const books = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-amber-200 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-amber-500 rounded-full animate-ping opacity-20"></div>
          <BookOpen className="absolute inset-0 w-6 h-6 m-auto text-amber-600 animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-200">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-red-600">
            Failed to load recent books. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-12">
      {/* Enhanced Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4 mr-2" />
          Hot Off The Press
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Latest{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Arrivals
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the newest additions to our collection, handpicked for book
          lovers like you
        </p>
      </div>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book: IBook, index: number) => (
            <Link
              to={`/books/${book._id}`}
              key={book._id}
              className="block group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 border border-gray-100">
                {/* New Badge */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3 inline mr-1" />
                    New
                  </div>
                )}

                {/* Book Cover */}
                <div className="relative overflow-hidden">
                  <img
                    src={
                      book.cover ||
                      "https://via.placeholder.com/250x380.png?text=No+Cover+Available"
                    }
                    alt={book.title}
                    className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Availability indicator */}
                  <div className="absolute top-3 right-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        book.available ? "bg-green-400" : "bg-red-400"
                      } shadow-lg`}
                    ></div>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      by {book.author}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        {book.genre}
                      </span>
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Recently Added
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        book.available
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          book.available ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      {book.available ? "Available" : "Out of Stock"}
                    </span>

                    {/* Hover arrow */}
                    <ArrowRight className="w-4 h-4 text-gray-400 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Recent Books Found
          </h3>
          <p className="text-gray-600 mb-6">
            Check back later for the latest additions to our collection!
          </p>
          <Link to="/books">
            <button className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-300">
              <BookOpen className="w-5 h-5 mr-2" />
              Browse All Books
            </button>
          </Link>
        </div>
      )}

      {/* Enhanced CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <Link
            to="/books"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 group"
          >
            <BookOpen className="w-5 h-5 mr-2 text-amber-600" />
            Explore Full Collection
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
