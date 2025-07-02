import { configureStore } from "@reduxjs/toolkit";
// import { bookApi } from "./api/book.api";
// import { borrowApi } from "./api/borrow.api";

export const store = configureStore({
  reducer: {
    
  },
 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
