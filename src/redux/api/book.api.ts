import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-api-by-safi.vercel.app/api/" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ filter, sortBy, sort, limit, page }) =>
        `books?filter=${filter}&sortBy=${sortBy}&sort=${sort}&limit=${limit}&page=${page}`,
      providesTags: ["Books"],
    }),
    getBookById: builder.query({
      query: (id) => `books/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
