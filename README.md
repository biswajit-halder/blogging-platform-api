# Blogging Platform API

A RESTful API for managing blog posts, built with Node.js, Express, and MySQL.

Sample solution for the <a href="https://roadmap.sh/projects/blogging-platform-api" target="_blank">Blogging Platform API</a> challenge from <a href="https://roadmap.sh" target="_blank">roadmap.sh</a>.

---

## Features

- Create, read, update, and delete blog posts.
- Search posts by term.
- Lightweight and easy to extend.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **MySQL** (for database setup)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/biswajit-halder/blogging-platform-api.git
   cd blogging-platform-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   ```

4. **Start the MySQL database**:
   Ensure the required tables are created in your database.

---

## Usage

### Start the server:

- **Development mode**:
  ```bash
  npm run dev
  ```

- **Production mode**:
  ```bash
  npm start
  ```

The server will run on `http://localhost:3000` by default.

---

## API Endpoints

### Posts

| Method | Endpoint         | Description                     |
|--------|-------------------|---------------------------------|
| GET    | `/posts`          | Retrieve all posts              |
| GET    | `/posts/:id`      | Retrieve a post by ID           |
| GET    | `/posts?term=tech`| Search posts by a specific term |
| POST   | `/posts`          | Create a new post               |
| PUT    | `/posts/:id`      | Update a post by ID             |
| DELETE | `/posts/:id`      | Delete a post by ID             |

---

## Environment Variables

The following environment variables are required to run the application:

| Variable       | Description                     |
|----------------|---------------------------------|
| `DB_HOST`      | Hostname of your MySQL database |
| `DB_USER`      | Username for the database       |
| `DB_PASSWORD`  | Password for the database       |
| `DB_NAME`      | Name of the database            |

---

## Scripts

| Command       | Description                          |
|---------------|--------------------------------------|
| `npm start`   | Start the server in production mode  |
| `npm run dev` | Start the server in development mode |

---

## Dependencies

- **dotenv**: Manage environment variables.
- **express**: Web framework for building the API.
- **mysql2**: MySQL client for Node.js.

### Dev Dependencies

- **nodemon**: Automatically restart the server during development.

---

## License

This project is licensed under the ISC License.