# Info Board Website

## Overview
The **Info Board** is a modern, responsive web application designed to provide users with detailed information about various topics, including scholarships, prerequisites for university courses, and more. Built using **React**, **TailwindCSS**, and **Node.js**, it offers a seamless user experience and secure authentication using **JWT**.

---

## Features

### Frontend Features
- **Dynamic Homepage**:
  - Displays an "Info Board" logo that links to a menu of university websites.
  - Header navigation includes links to About, Services, Contact, and Signup/Login pages.
- **About Page**: Describes the purpose and goals of the platform.
- **Services Page**:
  - Features a search bar to look up information on scholarships, courses, and more.
- **Contact Page**:
  - Includes an email address (`info-board@gmail.com`) for user inquiries.
- **Signup/Login Page**:
  - Signup form with fields for username, email, and password.
  - Dynamic header changes from "Sign Up" to "Log In" based on user authentication state.
- **Footer**:
  - Newsletter subscription form for users to stay updated.

### Backend Features
- **User Authentication**:
  - Signup and login functionality with hashed passwords (using **bcryptjs**).
  - Token-based authentication with **JWT** for secure session management.
- **REST API**:
  - Endpoints for user management, authentication, and protected routes.

---

## Architecture and Technologies

### Architecture
The project follows a **client-server architecture**:
- **Frontend**:
  - Built with **React** for a responsive and dynamic user interface.
  - **TailwindCSS** for streamlined styling and responsive design.
  - **React Router** for seamless navigation between pages.
- **Backend**:
  - **Node.js** runtime environment.
  - **Express.js** framework for building RESTful APIs.
  - **JWT** for authentication and secure communication.
- **Database**:
  - Mock in-memory user storage (can be replaced with MongoDB or MySQL for production).

### Technologies Used
- **Frontend**:
  - React
  - TailwindCSS
  - React Router
- **Backend**:
  - Node.js
  - Express.js
  - bcryptjs (for password hashing)
  - jsonwebtoken (for JWT authentication)
- **Other Tools**:
  - Axios: For API communication.
  - Git/GitHub: Version control.
  - VS Code: Code editor.

---

## Installation and Setup

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine (v14 or higher).
- **npm** or **yarn**: Package manager for dependencies.

### Clone the Repository
```bash
git clone https://github.com/yourusername/info-board.git
cd info-board
```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd front-end
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd back-end
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
   The backend will run on `http://localhost:5000` by default.

---

## API Endpoints

### Authentication
- **POST** `/signup`:
  - Description: Register a new user.
  - Request Body:
    ```json
    {
      "username": "exampleuser",
      "email": "example@gmail.com",
      "password": "securepassword"
    }
    ```
  - Response:
    ```json
    {
      "message": "User signed up successfully!"
    }
    ```

- **POST** `/login`:
  - Description: Authenticate a user and return a JWT token.
  - Request Body:
    ```json
    {
      "email": "example@gmail.com",
      "password": "securepassword"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwt_token_here",
      "message": "Login successful!"
    }
    ```

### Protected Routes
- **GET** `/protected`:
  - Description: Access a protected resource with a valid token.
  - Headers:
    ```json
    {
      "Authorization": "Bearer jwt_token_here"
    }
    ```
  - Response:
    ```json
    {
      "message": "Access granted",
      "user": { "email": "example@gmail.com" }
    }
    ```

---

## Development Highlights

### Successes
- Fully responsive design using TailwindCSS.
- JWT-based secure authentication.
- Dynamic header with authentication state tracking.
- Functional search bar and newsletter subscription.

### Challenges
- Debugging API calls and handling CORS errors.
- Managing dynamic state transitions in React.
- Designing a visually appealing yet functional layout.

### Areas for Improvement
- Implement a production-grade database (e.g., MongoDB).
- Enhance error handling and form validation on the frontend.
- Optimize for performance and SEO.

### Lessons Learned
- Importance of clear communication between frontend and backend.
- Best practices for managing state in React.
- Effective collaboration using Git and GitHub.

---

## Next Steps
- Add admin roles and user dashboards.
- Integrate with real-world data sources (e.g., APIs for scholarships).
- Deploy the app to production using **Netlify** (frontend) and **Heroku** (backend).
- Gather user feedback and iterate on the design and functionality.

---



