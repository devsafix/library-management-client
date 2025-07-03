import { createBrowserRouter } from "react-router-dom";
import Books from "../pages/Books";
import CreateBook from "../pages/CreateBook";
import EditBook from "../pages/EditBook";
import BorrowBook from "../pages/BorrowBook";
import BookDetails from "../pages/BookDetails";
import BorrowSummary from "../pages/BorrowSummary";
import App from "@/App";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <Books /> },
      { path: "/create-book", element: <CreateBook /> },
      { path: "/edit-book/:id", element: <EditBook /> },
      { path: "/books/:id", element: <BookDetails /> },
      { path: "/borrow/:bookId", element: <BorrowBook /> },
      { path: "/borrow-summary", element: <BorrowSummary /> },
    ],
  },
]);
