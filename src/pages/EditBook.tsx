import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { IBook } from "@/types/book.types";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/api/book.api";
import toast from "react-hot-toast";
import { NotebookPen, Sparkles } from "lucide-react";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetBookByIdQuery(id!, {
    refetchOnMountOrArgChange: true,
  });
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const [formData, setFormData] = useState<IBook>({
    title: "",
    author: "",
    genre: "FICTION",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
    cover: "",
  });

  useEffect(() => {
    if (data?.data) {
      setFormData(data.data);
    }
  }, [data]);

  // Handle loading state for fetching book details
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
      </div>
    );
  }

  // Handle error state if book data fetching fails
  if (error || !data?.data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center py-10 text-red-600 text-xl font-semibold bg-white p-8 rounded-lg shadow-lg">
          <p>Failed to load book for editing. Please try again.</p>
        </div>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "copies" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await updateBook({ id: id!, ...formData }).unwrap();
      if (res.success) {
        toast.success("Book updated successfully!");
        navigate(`/books`);
      } else {
        toast.error(res.message || "Update failed. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(
        err.data?.message || "Failed to update book. Please try again."
      );
    }
  };

  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl border border-gray-200"
    //   >
    //     <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
    //       Edit Book Details
    //     </h2>

    //     <div className="space-y-6">
    //       <div>
    //         <label
    //           htmlFor="title"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Title
    //         </label>
    //         <input
    //           id="title"
    //           name="title"
    //           type="text"
    //           value={formData.title}
    //           onChange={handleChange}
    //           placeholder="e.g., The Great Gatsby"
    //           required
    //           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="author"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Author
    //         </label>
    //         <input
    //           id="author"
    //           name="author"
    //           type="text"
    //           value={formData.author}
    //           onChange={handleChange}
    //           placeholder="e.g., F. Scott Fitzgerald"
    //           required
    //           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="genre"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Genre
    //         </label>
    //         <select
    //           id="genre"
    //           name="genre"
    //           value={formData.genre}
    //           onChange={handleChange}
    //           required
    //           className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //         >
    //           {[
    //             "FICTION",
    //             "NON_FICTION",
    //             "SCIENCE",
    //             "HISTORY",
    //             "BIOGRAPHY",
    //             "FANTASY",
    //           ].map((g) => (
    //             <option key={g} value={g}>
    //               {g
    //                 .replace(/_/g, " ")
    //                 .replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
    //               {/* Format genre text */}
    //             </option>
    //           ))}
    //         </select>
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="isbn"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           ISBN
    //         </label>
    //         <input
    //           id="isbn"
    //           name="isbn"
    //           type="text"
    //           value={formData.isbn}
    //           onChange={handleChange}
    //           placeholder="e.g., 978-0743273565"
    //           required
    //           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="description"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Description (Optional)
    //         </label>
    //         <textarea
    //           id="description"
    //           name="description"
    //           rows={4}
    //           value={formData.description}
    //           onChange={handleChange}
    //           placeholder="Provide a brief description of the book..."
    //           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
    //         />
    //       </div>

    //       <div>
    //         <label
    //           htmlFor="copies"
    //           className="block text-sm font-medium text-gray-700 mb-1"
    //         >
    //           Number of Copies
    //         </label>
    //         <input
    //           id="copies"
    //           name="copies"
    //           type="number"
    //           value={formData.copies}
    //           onChange={handleChange}
    //           required
    //           className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //         />
    //       </div>
    //     </div>

    //     <div className="mt-8">
    //       <button
    //         type="submit"
    //         disabled={isUpdating}
    //         className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    //       >
    //         {isUpdating ? "Updating..." : "Update Book"}
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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
                    <NotebookPen className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Title Section */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Update{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Book
                    </span>
                  </h1>
                  <p className="text-gray-600 text-lg font-medium">
                    Update book information and details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Book Details</h2>
            <p className="text-blue-100 mt-1">
              Make changes to the book information below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Book Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., The Great Gatsby"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 text-slate-700 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="author"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Author
                  </label>
                  <input
                    id="author"
                    name="author"
                    type="text"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="e.g., F. Scott Fitzgerald"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 text-slate-700 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="genre"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Genre
                  </label>
                  <select
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 bg-slate-50 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-slate-700 focus:bg-white"
                  >
                    {[
                      "FICTION",
                      "NON_FICTION",
                      "SCIENCE",
                      "HISTORY",
                      "BIOGRAPHY",
                      "FANTASY",
                    ].map((g) => (
                      <option key={g} value={g}>
                        {g
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="isbn"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    ISBN
                  </label>
                  <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    value={formData.isbn}
                    onChange={handleChange}
                    placeholder="e.g., 978-0743273565"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 text-slate-700 bg-slate-50 focus:bg-white"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="copies"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Number of Copies
                  </label>
                  <input
                    id="copies"
                    name="copies"
                    type="number"
                    value={formData.copies}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-slate-700 bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Description - Full Width */}
            <div className="mt-8">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Description{" "}
                <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a brief description of the book..."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 placeholder-slate-400 text-slate-700 bg-slate-50 focus:bg-white resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-slate-200">
              <button
                type="submit"
                disabled={isUpdating}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-102 active:scale-95 cursor-pointer"
              >
                {isUpdating ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Updating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Update Book
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
