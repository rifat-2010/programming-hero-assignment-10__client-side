# Habit_Tracker (Client)

Live site: https://programming-hero-assignment-10.netlify.app/

## Overview

Habit_Tracker is a modern, responsive web app for creating, tracking and managing daily habits. The client side (this repository) is built with React, Vite and Tailwind CSS and provides a clean UI for users to create habits, mark daily completions, follow streaks, and discover public habits shared by the community.

## Logo

The project includes a logo asset at `src/assets/habit-tracker.png` used in the navbar and header.

## Key Features

- Create, edit and delete personal habits with title, description, category and image.
- Track daily completions and view a progress bar showing the percentage completed over the last 30 days.
- Maintain and display streaks (current streak badge) to motivate consistency.
- Private routes for authenticated users (add/update habits, view details) and public gallery for shared habits.
- Sign in with email/password or Google and maintain user profile with photo and verification status.

## Technical Stack

- React 19 (Vite)
- Tailwind CSS + DaisyUI
- Firebase Authentication (Google & email/password)
- react-router for client routing
- react-icons, react-toastify, react-spinners and small UI helpers

## Project Structure (important files)

- `src/pages/` — Page components (Home, SignIn, SignUp, AddHabit, MyHabits, PublicHabits, HabitDetails, etc.)
- `src/components/` — Reusable UI components (Navbar, Footer, HabitCard, Loading, etc.)
- `src/firebase/` — Firebase configuration
- `src/context/` — Authentication context provider
- `src/routes/router.jsx` — App routes and data loaders

## Developer setup

1. Install dependencies

```bash
cd Client_side
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

## Routes & Links

The client uses named routes reflected across the app. Notable routes used in navigation:

- `/` — Home
- `/Add_Habit` — Add new habit (private)
- `/My_Habits` — My habits (private)
- `/Public_Habits` — Public habits index
- `/Habit_Details_page/:id` — Habit details (private)
- `/signIn-page`, `/signUp-page` — Authentication pages

## Notes & Conventions

- This repo expects a Firebase backend (config in `src/firebase/firebase.config.js`) for authentication and habit persistence. Make sure the backend server and endpoints used in loaders are running when previewing the full experience.
- Tailwind class naming in this project sometimes uses lint-specific tokens (for example `bg-linear-to-r` vs `bg-gradient-to-r`) — keep consistent with your project's Tailwind config or linter rules.

## Contact

If you need help or want to report issues, open an issue in the repository or contact the maintainer via the email embedded in the app's Auth profile.

## License

MIT — see root repository for license details.

Enjoy building great habits!
