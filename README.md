# Authentication System Project

## Introduction

This Authentication System is a TypeScript-based implementation for Node.js environments, focusing on secure user authentication. It provides registration, login capabilities, and user authentication via JSON Web Tokens (JWT). Designed to demonstrate best practices, this project is suitable as a foundational element for any application requiring user management and authentication.

## Features

- **User Registration**: Sign up with email and password.
- **User Login**: Sign in to the application and receive a JWT for authentication.
- **Password Security**: Hashing of user passwords for secure storage using bcrypt.
- **Token-Based Authentication**: Utilization of JWT for securing endpoints.
- **Protected Routes**: Middleware to protect routes that require authentication.
- **MongoDB Integration**: Storing user data in a MongoDB database.
- **Mongoose ODM**: MongoDB object modeling using Mongoose.
- **TypeScript**: Strongly typed JavaScript code for better maintainability.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your system.
- An instance of MongoDB running locally or accessible remotely.
- A `.env` file created at the root of the project with your custom environment variables.

## Installation

To install the Authentication System, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/NothDotNull/auth-api-JWT.git
cd authentication-system
```

2. Install the project dependencies:

```bash
npm install
```

3. Configure your environment variables in the '.env' file:

```bash
MONGODB_URI=<Your_MongoDB_URI>
JWT_SECRET=<Your_JWT_Secret>
```

4. Build the TypeScript project:

```bash
npm run build
```

5. Start the server:

```bash
npm start
```

Your server should now be running on http://localhost:3000.
Usage

The service exposes two primary endpoints for authentication:

- **Register: POST /api/auth/register**
- **Login: POST /api/auth/login**

Send the appropriate JSON payload to these endpoints to register a new user or log in an existing user.

License

This project is licensed under the MIT License - see the LICENSE file in the repository for details.

Contact

    Noth - @iAintNoth
   
