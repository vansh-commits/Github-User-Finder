# GitHub User Finder

## 📜 Project Overview

The **GitHub User Finder** is a React application that allows users to search for GitHub profiles and view details of a specific user. By interacting with the GitHub API, this app fetches and displays user information based on user input. The app provides a clean, user-friendly interface to view user details, such as name, bio, repositories, and more.

## 🎯 Features

- **Search for GitHub Users**: Enter a GitHub username to find details about a user.
- **Display User Details**: Shows name, bio, avatar, and more for the searched user.
- **Loading State**: Displays a loading spinner while fetching data.
- **Error Handling**: Graceful error messages if the user doesn't exist or if there’s an issue with the API call.
- **Recent Searches**: Stores the history of previous searches.
- **Responsive Design**: Works well on both desktop and mobile devices.

## 📌 Tech Stack

- **React** (Vite template)
- **GitHub API**: Fetch user details from the GitHub API
- **useState** & **useEffect**: For managing and fetching data
- **CSS**: Tailwindcss used for styling 


## Explanation of the Structure

- **`src/`**: Contains all the source code for the React application.
  - **`components/`**: Houses reusable UI components like `SearchBar`, `UserCard`, `Loader`, and `ErrorMessage`.
  - **`pages/`**: Contains the main page components (e.g., `Home.jsx`).
  - **`hooks/`**: Stores custom hooks (e.g., `useGitHubUser.js` for fetching GitHub user data).
  - **`styles/`**: Contains global styles (e.g., `app.css`).
  - **`App.jsx`**: The root component that renders the entire application.
  - **`main.jsx`**: The entry point for the React application.

- **`public/`**: Contains static assets like `index.html` and other public files.

- **`package.json`**: Lists project dependencies and scripts for running, building, and testing the application.

- **`README.md`**: Provides documentation for the project, including setup instructions, features, and folder structure.

This structure ensures a clean, modular, and scalable codebase for your React application.