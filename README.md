# GitHub Profile Search

This project demonstrates how to build an interactive GitHub Profile Search application using HTML, CSS, and JavaScript. It allows users to fetch and view GitHub user data in real time, serving as a practical exercise in API integration and dynamic UI updates.

## Features

- **Instant Search:** Users can search for any GitHub username and view profile details instantly.
- **Dynamic Data:** Fetches data using the GitHub API and displays repositories dynamically.
- **Responsive & Modern UI:** Features a premium dark-themed aesthetic with glassmorphism, gradient accents, and micro-animations for an enhanced user experience.
- **Vanilla Setup:** Uses vanilla HTML, CSS, and JS. External library Axios is used via a CDN for API requests.

## Project Structure

```
.
├── css/
│   └── style.css      # Contains all the styling, colors, card layouts, and animations
├── js/
│   └── script.js      # Handles DOM manipulation, Axios requests to GitHub API, and rendering logic
└── index.html         # Main layout and structure of the application
```

## How It Works

1. **HTML Layout:** The basic skeleton is formed using semantic HTML tags. An `<input>` field allows users to enter the desired username.
2. **CSS Styling:** A custom `style.css` provides the visual design, utilizing CSS variables, Flexbox for layout, and modern UI practices.
3. **JavaScript Logic:**
   - Elements are targeted using their IDs.
   - `userGetFunction(username)` calls the GitHub API endpoint for the user's details and handles any 404 errors nicely.
   - `repoGetFunction(username)` fetches the user's latest repositories.
   - `userCard(user)` and `repoCardFunction(repos)` dynamically construct and insert HTML snippets containing the fetched data.

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Start searching for GitHub usernames!
