# MERN Stack Event Management App

## Description
A simple MERN stack application for managing events. It includes the following features:
- User authentication and authorization using JWT.
- CRUD operations for events.
- Role-based access (Admin/User).
- Responsive UI built with React, utilizing context, hooks, and reusable components.

## Pages
1. **HomePage**: Landing page displaying featured events.
2. **AddEventPage**: Admin-only page to add new events.
3. **AdminDashboard**: Dashboard for managing users and events.
4. **ContactPage**: Page for users to send feedback or queries.
5. **EditEventPage**: Allows admins to update existing events.
6. **EventDetailsPage**: Displays detailed information about an event.
7. **LoginPage**: User login page.
8. **SignUpPage**: User registration page.

## Backend Features
- Node.js and Express for server-side logic.
- MongoDB as the database.
- Models:
  - **User**: Handles user authentication and roles.
  - **Event**: Manages event data.
- Organized structure with folders for controllers, models, middleware, routes, utils, and config.

## Installation and Running the Project

### Server
1. Navigate to the server directory:
   ```bash
   cd server

2. Install the dependencies:
   ```bash
   npm i

3. Add necessary env vars in the project root folder:
    # PORT=5000
    # MONGO_URI= MONGO DB ATLAS URI/CONNECTION STRING HERE
    # JWT_SECRET

4. Run the server with the following command:
   ```bash
   npm run dev

5. Success message:
    # Server is running on http://localhost:5000
    # MongoDB connected successfully!


### Client
1. Navigate to the client directory:
   ```bash
   cd client

2. Install the dependencies:
   ```bash
   npm i

3. Run the project with the following command:
   ```bash
   npm start



## Link to the deployed app:
https://conference-event-app-client.onrender.com