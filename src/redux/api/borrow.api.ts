import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-api-by-safi.vercel.app/api/" }),
  tagTypes: ["Borrow", "Books"],
  endpoints: (builder) => ({
    borrowBook: builder.mutation({
      query: (data) => ({
        url: "borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Borrow", "Books"],
    }),
    getBorrowSummary: builder.query({
      query: () => "borrow",
      providesTags: ["Borrow", "Books"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
