import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
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
