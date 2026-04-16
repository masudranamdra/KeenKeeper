# KeenKeeper

## Project Overview

KeenKeeper is a friendship tracking web application designed to help users maintain meaningful relationships. It allows users to monitor their communication with friends and encourages consistent interaction through a structured tracking system.

This project is developed as part of an academic assignment and demonstrates practical implementation of component-based architecture, routing, and data-driven UI.

---

## Live Links

Live Site: https://keenkeeper-mdra.netlify.app/
GitHub Repository: https://github.com/masudranamdra/KeenKeeper

---

## Technologies Used

* React.js
* React Router DOM
* Tailwind CSS
* Recharts

---

## Core Features

### Friend Management System

* Stores friend data in structured JSON format
* Tracks communication gap using "days since contact"
* Categorizes status as overdue, almost due, or on-track
* Displays tags and personal bio for each friend

### Friend Details System

* Shows complete profile information
* Displays:

  * Contact goal
  * Next due date
  * Current status
* Includes quick interaction options:

  * Call
  * Text
  * Video
* Each interaction updates the timeline automatically

### Timeline Tracking

* Records all interactions with date and type
* Displays a clear communication history
* Supports filtering based on interaction type

---

## Additional Functionalities

* Fully responsive for mobile, tablet, and desktop
* Loading state while fetching data
* 404 error page for invalid routes
* Page reload works correctly after deployment
* Toast notification for user actions

---

## Project Structure

```
dist/
node_modules/
public/

src/
 ├── assets/
 ├── component/
 ├── error/
 │    └── Error.jsx
 ├── shard/
 │    ├── Footer/
 │    │    └── Footer.jsx
 │    ├── navbar/
 │    ├── layout/
 │    │    └── MainLayout.jsx
 ├── pages/
 │    ├── friendDetails/
 │    │    └── FriendDetails.jsx
 │    ├── homepage/
 │    │    ├── Homepage.jsx
 │    │    ├── HomeCard.jsx
 │    │    ├── HomeCardinfo.jsx
 │    │    └── HomeHeader.jsx
 │    ├── status/
 │    │    └── Status.jsx
 │    ├── timeline/
 │    │    └── Timeline.jsx
 ├── App.jsx
 ├── App.css
 ├── index.css
 └── main.jsx
```

---

## Design Approach

The design is intentionally kept clean and minimal.
Focus has been given to structured layout, readability, and user interaction rather than heavy visual elements.

This project follows a modular component-based architecture for better scalability and maintainability.

---

## Author

Masud Rana
Student Project

---