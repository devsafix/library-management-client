# 📚 Library Management System (Client)

A minimal library management frontend built with **React**, **TypeScript**, **Redux Toolkit Query**, and **Tailwind CSS**. This system allows users to manage books, borrow them, and view borrowing summaries — all with a clean and responsive user interface.

---

## 🚀 Features

- 🔍 View all books in a sortable, filterable table.
- ➕ Add new books with validation.
- ✏️ Edit book details and automatically update availability.
- ❌ Delete books with confirmation.
- 📖 Borrow books with quantity control and due date.
- 📊 View borrow summary (aggregated view of total borrowed copies).
- ✅ Optimistic UI updates and toast notifications.
- 📱 Fully responsive design for mobile, tablet, and desktop.

---

## 🧰 Tech Stack

| Layer             | Technology                      |
|------------------|----------------------------------|
| Frontend         | React + Vite + TypeScript        |
| State Management | Redux Toolkit + RTK Query        |
| Styling          | Tailwind CSS + ShadCN UI         |
| Routing          | React Router DOM (Data mode)     |
| Notifications    | React Hot Toast                  |
| API              | REST API (connected to Express)  |

---

## 🗂️ Folder Structure

```

src/
├── components/         # Reusable UI components (layout, dialog, tables)
├── modules/            # Feature-specific UI pieces
├── pages/              # Page-level components (Books, CreateBook, etc.)
├── redux/
│   ├── api/            # RTK Query API services
│   ├── hooks.ts        # Custom typed hooks
│   └── store.ts        # Redux store config
├── routes/             # React Router layout & route config
├── types/              # TypeScript interfaces/types
├── lib/                # Utility/helper functions
├── App.tsx
├── main.tsx
└── index.css

````

---

## 🔧 Getting Started

### 1️⃣ Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- Backend API (running on `http://localhost:5000/api/`)
- `npm` or `pnpm`

---

### 2️⃣ Installation

```bash
# Clone the project
git clone https://github.com/devsafix/library-management-client.git
cd library-client

# Install dependencies
npm install
# or
pnpm install
````

---

### 3️⃣ Start the Development Server

```bash
npm run dev
# or
pnpm dev
```

The app will run at: [http://localhost:5173](http://localhost:5173)

---

## ✅ Bonus Features Implemented

* [x] Optimistic UI updates
* [x] Toast notifications
* [x] Responsive layout
* [x] Type-safe forms
* [x] RTK Query for all API interactions

---

## 🙌 Acknowledgements

* [Redux Toolkit Docs](https://redux-toolkit.js.org/)
* [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
* [ShadCN UI](https://ui.shadcn.com/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 📬 Contact

For any questions or issues:

## Author

**Kawser Ferdous Safi** – [devsafix.vercel.app](https://devsafix.vercel.app)
