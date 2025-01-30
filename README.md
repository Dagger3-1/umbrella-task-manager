# Umbrella Task Manager

A full-stack MERN (MongoDB, Express.js, React, Node.js) task management application with GraphQL integration.

## Description

Umbrella Task Manager is a modern web application that helps users organize and track their tasks efficiently. It features user authentication, real-time task updates, and a clean, intuitive interface.

## Features

- User authentication (signup/login)
- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Add comments to tasks
- Real-time updates using GraphQL
- Responsive design for all devices
- Secure password hashing
- JWT token authentication

## Technologies Used

### Frontend
- React.js
- Apollo Client
- React Router DOM
- Vite
- JWT Decode
- GraphQL

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Apollo Server
- GraphQL
- JSON Web Token
- bcryptjs

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/umbrella-task-manager.git
```

2. Install dependencies for both client and server:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

3. Create a `.env` file in the root directory and add your MongoDB URI:
```
MONGODB_URI=your_mongodb_uri
```

4. Start the development server:
```bash
npm run develop
```

## Usage

1. Register a new account or login with existing credentials
2. Create new tasks using the task form
3. View all tasks on the homepage
4. Mark tasks as complete/incomplete
5. Add comments to tasks
6. View completed tasks in a separate section
7. Delete tasks when no longer needed

## Scripts

- `npm run develop`: Runs both client and server in development mode
- `npm run build`: Builds the client for production
- `npm start`: Starts the production server
- `npm run seed`: Seeds the database with sample data

## Project Structure

```
umbrella-task-manager/
├── client/                 # Frontend React application
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── config/
│   ├── models/
│   ├── schemas/
│   ├── utils/
│   └── package.json
└── package.json
```

## API Documentation

The application uses GraphQL for API interactions. Main queries and mutations include:

### Queries
- `thoughts`: Get all tasks
- `thought`: Get a single task
- `me`: Get current user data

### Mutations
- `addUser`: Create new user account
- `login`: Authenticate user
- `addThought`: Create new task
- `toggleThoughtCompletion`: Toggle task completion status
- `deleteThought`: Remove a task
- `addComment`: Add comment to a task

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/umbrella-task-manager](https://github.com/yourusername/umbrella-task-manager)

## Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js](https://expressjs.com/)