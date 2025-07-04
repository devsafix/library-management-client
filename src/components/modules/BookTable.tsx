import { Pencil, Trash2, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button"; // Assuming Button is a styled component like from Shadcn UI
import type { IBook } from "@/types/book.types";

interface Props {
  books: IBook[];
  onDelete: (id: string) => void;
}

const BookTable = ({ books, onDelete }: Props) => {
  if (books.length === 0) {
    return (
      <div className="text-center py-10 text-gray-600 text-lg bg-white rounded-xl shadow-lg border border-gray-200">
        No books found. Start by adding a new book!
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100 mb-10">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"></div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50/20 to-blue-50/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>

      <div className="relative overflow-x-auto overflow-y-auto h-[800px]">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-indigo-600" />
                  <span>Title</span>
                </div>
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                Genre
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                ISBN
              </th>
              <th className="px-6 py-5 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Copies
              </th>
              <th className="px-6 py-5 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Available
              </th>
              <th className="px-6 py-5 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {books.map((book, index) => (
              <tr
                key={book._id}
                className={`group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                }`}
              >
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-11 w-11 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-blue-200 transition-all duration-300 shadow-sm">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-indigo-900 transition-colors duration-200">
                        {book.title}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 font-medium">
                  {book.author}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border border-purple-200">
                    {book.genre}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 font-mono bg-gray-50">
                  {book.isbn}
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                    {book.copies}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-center">
                  {book.available ? (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200 shadow-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200 shadow-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Unavailable
                    </span>
                  )}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Link to={`/books/${book._id}`} title="View Details">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-xl shadow-sm hover:shadow-md transform hover:scale-105"
                      >
                        <BookOpen className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to={`/edit-book/${book._id}`} title="Edit Book">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-amber-600 hover:text-amber-800 hover:bg-amber-50 transition-all duration-200 cursor-pointer rounded-xl shadow-sm hover:shadow-md transform hover:scale-105"
                      >
                        <Pencil className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to={`/borrow/${book._id}`} title="Borrow Book">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 hover:text-white transition-all duration-200 px-4 py-2 text-xs cursor-pointer rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 border-0"
                      >
                        Borrow
                      </Button>
                    </Link>
                    <Button
                      onClick={() => book._id && onDelete(book._id)}
                      title="Delete Book"
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-800 hover:bg-red-50 transition-all duration-200 cursor-pointer rounded-xl shadow-sm hover:shadow-md transform hover:scale-105"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;
