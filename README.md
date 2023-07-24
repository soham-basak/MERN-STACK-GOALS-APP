# Goal Setter

Goal Setter is a dynamic and user-friendly web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Redux for efficient state management and JWT (JSON Web Tokens) authentication to ensure secure user access. The application is designed to empower users to register, log in securely, set their personal goals, and manage them effectively. Goal Setter aims to be a comprehensive tool for individuals seeking a structured approach to achieve their aspirations and track their progress.

## Project Support Features

- #### User Registration and Authentication:

  Goal Setter provides a seamless user registration process. Users can sign up with their email and create a secure password. JWT authentication ensures their account remains protected.

- #### User Login and Logout:

  Returning users can easily log in to their accounts using their credentials. Additionally, the application supports secure logout to ensure user privacy.

- #### Goal Creation:

  Once logged in, users can create new goals and see existing goals with creation date.

- #### Goal Deletion:

  Goal Setter allows users to delete goals that are no longer relevant or have been accomplished, providing a clean and clutter-free interface.

- #### Responsive Design:

  Goal Setter is developed with a responsive design, ensuring optimal user experience on various devices, including desktops, tablets, and smartphones.

- #### Privacy and Security:
  User data and login credentials are stored securely, adhering to industry best practices, and ensuring user privacy.

## Installation

Install MERN-STACK-GOALS-APP

- Clone this repository [here](https://github.com/soham-basak/MERN-STACK-GOALS-APP.git).

- Run npm install to install all dependencies

```bash
  cd MERN-STACK-GOALS-APP
  npm install
```

- First configure your Mongodb URL in the .env file. You can use your locally installed MongoDB. Do configure to your choice in the application .env file.

- Run npm run dev

```bash
   npm run dev
```

## Demo

- [Here](https://github.com/soham-basak)

## REST API Reference

### API Endpoints

| HTTP Verbs | Endpoints        | Action                            |
| ---------- | ---------------- | --------------------------------- |
| POST       | /api/users/      | To create a new user account      |
| POST       | /api/users/login | To login an existing user account |
| GET        | /api/me/`id`     | To get user data                  |
| GET        | /api/goals/      | To get user goals                 |
| POST       | /api/goals/      | To create a new goal              |
| PUT        | /api/goals/`id`  | To edit a goal                    |
| DELETE     | /api/goals/`id`  | To delete a single goal           |

## Tech Stack

- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.

- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.

- [ReactJs](https://legacy.reactjs.org/) The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently.

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.

## Author

- [@dexter](https://github.com/soham-basak)
