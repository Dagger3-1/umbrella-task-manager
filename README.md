# Umbrella Task Manager

## Overview

Umbrella Task Manager is a web application designed to help users manage their tasks efficiently. It utilizes React for the frontend and Apollo Client for state management, while the backend is powered by Node.js, Express, and MongoDB.

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete tasks
- Comment on tasks
- View completed and pending tasks
- Responsive design for mobile and desktop

## Technologies Used

### Client

- **React**: A JavaScript library for building user interfaces.
- **Apollo Client**: For managing GraphQL data.
- **Vite**: A build tool that provides a fast development environment.
- **CSS**: For styling the application.

### Server

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **Apollo Server**: For building a GraphQL API.
- **MongoDB**: NoSQL database for storing user and task data.
- **Mongoose**: ODM for MongoDB and Node.js.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/umbrella-task-manager.git
   cd umbrella-task-manager
   ```

2. Navigate to the client directory and install dependencies:

   ```bash
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:

   ```bash
   cd ../server
   npm install
   ```

4. Set up your MongoDB connection string in the `.env` file in the server directory:

   ```plaintext
   MONGODB_URI=mongodb://127.0.0.1:27017/programming-thoughts
   ```

### Running the Application

1. Start the server:

   ```bash
   cd server
   npm start
   ```

2. In a new terminal, start the client:

   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

### Authentication

- **POST** `/graphql` - Login and Signup mutations.

### Tasks

- **GET** `/graphql` - Query for tasks.
- **POST** `/graphql` - Mutation to add a new task.
- **DELETE** `/graphql` - Mutation to delete a task.

### Comments

- **POST** `/graphql` - Mutation to add a comment to a task.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

