/* eslint-disable @typescript-eslint/no-explicit-any */
import { Notebook, Sparkles } from "lucide-react";
import { useGetBorrowSummaryQuery } from "../redux/api/borrow.api";
import type { ReactNode, Key } from "react";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-b-blue-300 border-l-blue-300 rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
                    <Notebook className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>

                {/* Title Section */}
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                    Borrow{" "}
                    <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Summary
                    </span>
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg font-medium">
                    Comprehensive overview of your library borrowing statistics
                    and book lending data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {data?.data && data.data.length > 0 ? (
            <>
              {/* Stats Cards */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {data.data.length}
                    </div>
                    <div className="text-blue-100 text-sm font-medium">
                      Total Books
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {data.data.reduce(
                        (acc: any, item: { totalQuantity: any }) =>
                          acc + item.totalQuantity,
                        0
                      )}
                    </div>
                    <div className="text-blue-100 text-sm font-medium">
                      Total Borrowed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      {Math.round(
                        data.data.reduce(
                          (acc: any, item: { totalQuantity: any }) =>
                            acc + item.totalQuantity,
                          0
                        ) / data.data.length
                      )}
                    </div>
                    <div className="text-blue-100 text-sm font-medium">
                      Average per Book
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Section - Hidden on mobile */}
              <div className="hidden md:block p-8">
                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                        >
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-gray-500"
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
                            <span>Book Title</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                        >
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                              />
                            </svg>
                            <span>ISBN</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-5 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                        >
                          <div className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            <span>Total Borrowed</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {data?.data?.map(
                        (
                          item: {
                            book: {
                              isbn: ReactNode;
                              title: string;
                            };
                            totalQuantity: number;
                          },
                          idx: Key | null | undefined
                        ) => (
                          <tr
                            key={idx}
                            className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 ease-in-out group"
                          >
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                                  <span className="text-white font-bold text-sm">
                                    {item.book.title.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                    {item.book.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-1 rounded-lg inline-block">
                                {item.book.isbn}
                              </div>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                                  {item.totalQuantity}
                                </div>
                                <div className="ml-3 text-xs text-gray-500">
                                  times
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Card Layout - Visible only on mobile */}
              <div className="md:hidden p-4">
                <div className="space-y-4">
                  {data?.data?.map(
                    (
                      item: {
                        book: {
                          isbn: ReactNode;
                          title: string;
                        };
                        totalQuantity: number;
                      },
                      idx: Key | null | undefined
                    ) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="p-6">
                          {/* Book Title and Icon */}
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {item.book.title.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                                {item.book.title}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <svg
                                  className="w-4 h-4"
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
                                <span>Book Title</span>
                              </div>
                            </div>
                          </div>

                          {/* ISBN */}
                          <div className="mb-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                />
                              </svg>
                              <span>ISBN</span>
                            </div>
                            <div className="text-sm text-gray-700 font-mono bg-gray-50 px-4 py-2 rounded-lg inline-block">
                              {item.book.isbn}
                            </div>
                          </div>

                          {/* Total Borrowed */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                              </svg>
                              <span>Total Borrowed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                                {item.totalQuantity}
                              </div>
                              <span className="text-xs text-gray-500">
                                times
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                No Data Available
              </h3>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                There are currently no borrow summary records to display. Check
                back later or contact support if you believe this is an error.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BorrowSummary;
