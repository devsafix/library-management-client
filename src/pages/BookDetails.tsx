import { useGetBookByIdQuery } from "@/redux/api/book.api";
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  User,
  Tag,
  Hash,
  Copy,
  CheckCircle,
  XCircle,
  Star,
  Heart,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id!);
  const book = data?.data;

  if (isLoading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-amber-200 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-amber-500 rounded-full animate-ping opacity-20"></div>
            <BookOpen className="absolute inset-0 w-8 h-8 m-auto text-amber-600 animate-pulse" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">
            Loading book details...
          </p>
        </div>
      </div>
    );

  if (!book)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Book Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The book you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/books">
            <button className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-300">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Books
            </button>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/books"
            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back to Collection</span>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Book Cover Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
              {book.cover ? (
                <div className="relative group">
                  <img
                    className="w-80 h-auto object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Availability badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                        book.available
                          ? "bg-gradient-to-r from-green-500 to-emerald-600"
                          : "bg-gradient-to-r from-red-500 to-red-600"
                      }`}
                    >
                      {book.available ? "Available" : "Out of Stock"}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-80 h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-gray-400" />
                </div>
              )}
            </div>

            {/* Book Info Section */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Title and Author */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {book.title}
                </h1>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-amber-600" />
                  <span className="text-xl text-gray-700 font-medium">
                    by {book.author}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Tag className="w-5 h-5 text-amber-600" />
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    {book.genre}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </button>
                <button className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>

              {/* Book Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Hash className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        ISBN
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {book.isbn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Copy className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Copies Available
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {book.copies}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    {book.available ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-1" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Status
                      </p>
                      <p
                        className={`text-lg font-semibold ${
                          book.available ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {book.available
                          ? "Available for Borrowing"
                          : "Currently Unavailable"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Section */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="text-lg font-semibold text-gray-900">
                      4.5
                    </span>
                    <span className="text-gray-600">(248 reviews)</span>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300">
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          {book.description && (
            <div className="px-8 lg:px-12 pb-8 lg:pb-12">
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-amber-600" />
                  About This Book
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>{book.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
