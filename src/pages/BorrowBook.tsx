import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useEffect
import { useBorrowBookMutation } from "@/redux/api/borrow.api";
import { useGetBookByIdQuery } from "@/redux/api/book.api";
import toast from "react-hot-toast";
import { BookOpen, Sparkles } from "lucide-react";

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [borrowBook, { isLoading: isBorrowing }] = useBorrowBookMutation();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const {
    data,
    isLoading: isBookLoading,
    error: bookError,
  } = useGetBookByIdQuery(bookId!);
  const book = data?.data;

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const formattedDate = today.toISOString().split("T")[0];
    setDueDate(formattedDate);
  }, []);

  if (isBookLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-indigo-600"></div>
      </div>
    );
  }

  if (bookError || !book) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center py-10 text-red-600 text-xl font-semibold bg-white p-8 rounded-lg shadow-lg">
          <p>Book not found or an error occurred. Cannot borrow.</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (book.copies < quantity) {
      toast.error(`Only ${book.copies} copies available.`);
      return;
    }

    // Validate dueDate is in the future
    const selectedDate = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      toast.error("Due date cannot be in the past.");
      return;
    }

    try {
      const res = await borrowBook({
        book: bookId!,
        quantity,
        dueDate,
      }).unwrap();
      if (res.success) {
        toast.success("Book borrowed successfully!");
        navigate("/borrow-summary");
      } else {
        toast.error(res.message || "Failed to borrow book. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Borrow error:", error);
      toast.error(
        error.data?.message ||
          "Failed to borrow book. An unexpected error occurred."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
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
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Title Section */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                    Borrow{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Book
                    </span>
                  </h1>
                  <p className="text-gray-600 text-lg font-medium">
                    Complete your book borrowing request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">Book Details</h2>
            <p className="text-emerald-100 mt-1">
              Review and confirm your borrowing request
            </p>
          </div>

          <div className="p-8">
            {/* Book Information Card */}
            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-400 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-slate-600 mb-2">by {book.author}</p>
                  <div className="flex md:flex-row flex-col items-start md:items-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                      {book.genre
                        .replace(/_/g, " ")
                        .toLowerCase()
                        .replace(/\b\w/g, (l: string) => l.toUpperCase())}
                    </span>
                    <span className="text-slate-600">ISBN: {book.isbn}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-emerald-600"
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
                      <span className="text-emerald-700 font-semibold">
                        {book.copies} copies available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quantity */}
              <div className="space-y-2">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Quantity to Borrow
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min={1}
                  max={book.copies}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 text-slate-700 bg-slate-50 focus:bg-white"
                />
                {quantity > book.copies && (
                  <div className="flex items-center gap-2 mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <svg
                      className="w-4 h-4 text-red-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-red-600">
                      You can only borrow up to {book.copies} copies.
                    </p>
                  </div>
                )}
              </div>

              {/* Due Date */}
              <div className="space-y-2">
                <label
                  htmlFor="dueDate"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Return Due Date
                </label>
                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-200 text-slate-700 bg-slate-50 focus:bg-white"
                />
              </div>
            </div>

            {/* Summary Section */}
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Borrowing Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-emerald-600">
                    {quantity}
                  </div>
                  <div className="text-sm text-slate-600">Copies</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-teal-600">
                    {dueDate ? new Date(dueDate).toLocaleDateString() : "--"}
                  </div>
                  <div className="text-sm text-slate-600">Due Date</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-cyan-600">
                    {dueDate
                      ? Math.ceil(
                          (new Date(dueDate).getTime() - new Date().getTime()) /
                            (1000 * 60 * 60 * 24)
                        )
                      : "--"}
                  </div>
                  <div className="text-sm text-slate-600">Days</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-slate-200">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={
                  isBorrowing ||
                  quantity > book.copies ||
                  quantity < 1 ||
                  !dueDate
                }
                className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-102 cursor-pointer active:scale-95"
              >
                {isBorrowing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Borrow Book
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowBook;
