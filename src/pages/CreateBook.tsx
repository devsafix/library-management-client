import { useAddBookMutation } from "../redux/api/book.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  BookOpen,
  Plus,
  Sparkles,
  User,
  Hash,
  FileText,
  Copy,
} from "lucide-react";

const CreateBook = () => {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "FICTION",
    isbn: "",
    description: "",
    copies: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBook(form).unwrap();
      toast.success("Book created successfully!");
      navigate("/books");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to create book. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pb-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          {/* Professional Header with Enhanced Design */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-blue-50/50 rounded-2xl blur-xl"></div>

            <div className="relative flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Icon Section */}
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl shadow-xl">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Title Section */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Add New{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Book
                    </span>
                  </h1>
                  <p className="text-gray-600 text-lg font-medium">
                    Expand your digital library collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-t-3xl"></div>

          <div className="space-y-8">
            {/* Title Field */}
            <div className="group">
              <label
                htmlFor="title"
                className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-3"
              >
                <BookOpen className="h-4 w-4 text-indigo-600" />
                <span>Book Title</span>
              </label>
              <div className="relative">
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="e.g., The Great Gatsby"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>

            {/* Author Field */}
            <div className="group">
              <label
                htmlFor="author"
                className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-3"
              >
                <User className="h-4 w-4 text-indigo-600" />
                <span>Author</span>
              </label>
              <div className="relative">
                <input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="e.g., F. Scott Fitzgerald"
                  value={form.author}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>

            {/* Genre Field */}
            <div className="group">
              <label
                htmlFor="genre"
                className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-3"
              >
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Genre</span>
              </label>
              <div className="relative">
                <select
                  id="genre"
                  name="genre"
                  value={form.genre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="FICTION">Fiction</option>
                  <option value="NON_FICTION">Non-Fiction</option>
                  <option value="SCIENCE">Science</option>
                  <option value="HISTORY">History</option>
                  <option value="BIOGRAPHY">Biography</option>
                  <option value="FANTASY">Fantasy</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* ISBN Field */}
            <div className="group">
              <label
                htmlFor="isbn"
                className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-3"
              >
                <Hash className="h-4 w-4 text-indigo-600" />
                <span>ISBN</span>
              </label>
              <div className="relative">
                <input
                  id="isbn"
                  name="isbn"
                  type="text"
                  placeholder="e.g., 978-0743273565"
                  value={form.isbn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400 font-mono"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>

            {/* Description Field */}
            <div className="group">
              <label
                htmlFor="description"
                className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-3"
              >
                <FileText className="h-4 w-4 text-indigo-600" />
                <span>Description</span>
                <span className="text-xs text-gray-500 font-normal">
                  (Optional)
                </span>
              </label>
              <div className="relative">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Provide a brief description of the book..."
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                />
                <div className="absolute top-4 right-3 pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>

            {/* Copies Field */}
            <div className="group">
              <label
                htmlFor="copies"
                className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-3"
              >
                <Copy className="h-4 w-4 text-indigo-600" />
                <span>Number of Copies</span>
              </label>
              <div className="relative">
                <input
                  id="copies"
                  name="copies"
                  type="number"
                  min={1}
                  value={form.copies}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition-all duration-200 text-gray-900"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="group relative cursor-pointer w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              <Plus className="h-5 w-5 mr-2" />
              <span className="relative">Add Book to Library</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
