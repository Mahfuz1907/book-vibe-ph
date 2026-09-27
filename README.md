<p align="center">
  <img src="./public/cover.png" alt="Book Vibe Banner" width="600">
</p>

# Book Vibe — Online Book Library & Reading Tracker

A responsive, feature-rich web application built with Next.js for discovering, listing, reviewing, and tracking your reading journey seamlessly.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contact](#contact)

---

## About the Project

**Book Vibe** is an intuitive, cozy book library web application designed to help users explore curated books, organize read and wishlisted titles, and visually analyze reading statistics.

---

## Project Overview

Built with modern web technologies including **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, Book Vibe provides a fast and mobile-first user experience. The application fetches book details dynamically, visualizes page counts using custom triangular bar charts powered by **Recharts**, and manages state persistence across page visits via React Context API.

This project is done using a fake api, api link: [https://cdn.jsdelivr.net/gh/Mahfuz1907/book-vibe-api@master/books.json](https://cdn.jsdelivr.net/gh/Mahfuz1907/book-vibe-api@master/books.json)

---

## Key Features

- **Featured Books Showcase** — Grid layout showcasing books with ratings, category tags, author details, and total page counts.
- **Listed Books Management** — Tabbed organization allowing users to easily view and filter their "Read Books" and "Wishlist Books".
- **Visual Reading Analytics** — Custom interactive bar chart (`Pages to Read`) with dynamic multi-color triangular bars visualizing page counts.
- **Global Context State** — Centralized React Context API state management for seamless tracking across pages.
- **Responsive Layout & Design** — Modern UI styled with Tailwind CSS, DaisyUI, and custom rounded card components.

---

## Tech Stack

**Framework & Core:** Next.js (App Router) · React · TypeScript  
**Styling & Design:** Tailwind CSS · Daisy UI  
**Data Visualization:** Recharts  
**Icons & Feedback:** Lucide React · React Icons · React Toastify  
**Tools:** Git · VS Code · npm

---

## Dependencies

```json
{
  "daisyui": "^5.7.46",
  "lucide-react": "^1.48.0",
  "next": "^16.3.6",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-icons": "^5.5.0",
  "react-toastify": "^11.1.0",
  "recharts": "^3.10.1"
}
```

---

## Installation️ & Setup

1. Clone the repo and install dependencies:

```bash
git clone [https://github.com/Mahfuz1907/book-vibe-ph](https://github.com/Mahfuz1907/book-vibe-ph)
cd book-vibe-ph
npm install
```

2. Run the application:

```bash
npm run dev
```

---

## Folder Structure

````plaintext
Here is the updated `Folder Structure` section of your `README.md` matching your exact project layout:

```plaintext
book-vibe/
├── Components/
│   ├── Banner/
│   │   └── Banner.tsx
│   ├── Books/
│   │   ├── BookCard.tsx
│   │   ├── Books.tsx
│   │   └── loading.tsx
│   ├── Footer/
│   │   └── Footer.tsx
│   └── Navbar/
│       └── Navbar.tsx
├── Context/
│   └── BooksContext.tsx
├── app/
│   ├── book/
│   │   └── [id]/
│   │       ├── BookActionButtons.tsx
│   │       ├── loading.tsx
│   │       ├── not-found.tsx
│   │       └── page.tsx
│   ├── listed-books/
│   │   ├── ListedBookCardButton.tsx
│   │   ├── ListedBooksCard.tsx
│   │   ├── ListedBooksList.tsx
│   │   ├── SortAndTabs.tsx
│   │   └── page.tsx
│   ├── pages-to-read/
│   │   ├── Chart.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── README.md
└── package.json
````

---

## Contact

**Live URL:** [Live Site](https://book-vibe-ph.vercel.app/)
**Email:** [username](mahfuztamim1907@gmail.com)
**Portfolio:** [Portfolio](https://portfolio-frontend-cv.netlify.app/)
