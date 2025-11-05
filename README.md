# 🎬 Netflix Clone – Movie Browser App

A sleek and responsive movie browsing application inspired by Netflix, built using **React**, **Vite**, and **The Movie Database (TMDB) API**. It showcases dynamic movie sections like _Now Playing_, _Popular_, _Top Picks_, and more — complete with horizontal scrolling, image previews, and category-based API fetching.

---

## 🚀 Features

- 🔥 **Dynamic Movie Sections** – Fetches real-time data from TMDB for categories like:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- 🖼️ **Backdrop Previews** – Displays movie posters with hover effects and titles.
- 🧭 **Horizontal Scroll Navigation** – Smooth scroll with mouse wheel support.
- ⚡ **Fast Development Setup** – Powered by Vite for instant reloads and optimized builds.
- 📁 **Modular Folder Structure** – Clean separation of components, assets, and API logic.
- 📱 **Responsive Design** – Fully mobile and tablet compatible with adaptive layout and touch-friendly scrolling.

---

## 📦 Tech Stack

| Technology   | Purpose                      |
| ------------ | ---------------------------- |
| React        | UI and component logic       |
| Vite         | Fast bundling and dev server |
| TMDB API     | Movie data source            |
| Tailwind CSS | Styling and layout           |
| JavaScript   | Core logic and interactivity |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

2. Install Dependencies

```bash
npm install
```

3. Run the Development Server

```bash
npm run dev
```

Visit http://localhost:5173 in your browser.

🔐 API Configuration
This project uses a hardcoded TMDB bearer token for simplicity. If you want to switch to environment variables:

- Create a .env file in the root:
  VITE_TMDB_TOKEN=your_token_here

- Update your fetch headers:
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`


Then restart the dev server:
npm run dev

📁 Folder Structure
src/
├── assets/ # Static assets like Cards_data.js
├── components/ # Reusable UI components (e.g., TitleCards.jsx)
├── cards/ # Optional card logic or data
├── App.jsx # Main app layout
├── main.jsx # Entry point
public/ # Static files



🧹 Recent Changes

- ✅ Moved Cards_data.js from /public to /src/assets
- ✅ Fixed API response handling with cleanup in useEffect
- ✅ Added fallback for missing images
- ✅ Improved scroll behavior with conditional event listener
- ✅ Verified full mobile and tablet compatibility

📌 To-Do / Future Enhancements

- 🔍 Add search functionality
- 🧑‍💻 Add user login and favorites
- 🌐 Add internationalization (i18n)
- 🎨 Improve mobile responsiveness
