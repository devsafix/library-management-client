import BookTable from "@/components/modules/BookTable";
import { useGetBooksQuery, useDeleteBookMutation } from "../redux/api/book.api";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { Library, Sparkles } from "lucide-react";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery(
    {
      filter: "",
      sortBy: "createdAt",
      sort: "desc",
      limit: 100,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteBook(id).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      toast.error("Failed to delete: " + errorMessage);
    }
  };

  if (isLoading)
    return (
      <div className="w-20 h-20 mx-auto mt-32 border-4 border-dashed rounded-full animate-spin border-black"></div>
    );

  return (
    <div className="max-w-7xl mx-auto p-4">
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
                  <Library className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>

              {/* Title Section */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  All Books{" "}
                  <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Collection
                  </span>
                </h1>
                <p className="text-gray-600 text-lg font-medium">
                  Manage and explore your digital library
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Total Books</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">185</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Digital Library
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Smart Search
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Easy Management
              </span>
            </div>
          </div>
        </div>
      </div>
      <BookTable books={data?.data || []} onDelete={handleDelete} />
    </div>
  );
};

export default Books;
