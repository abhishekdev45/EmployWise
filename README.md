# User Management App

This is a React-based User Management application that allows users to log in, view, edit, and delete users. The application uses Redux Toolkit for state management, Axios for API calls, and Tailwind CSS for styling.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Assumptions and Considerations](#assumptions-and-considerations)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- React
- Redux Toolkit
- Axios
- Tailwind CSS
- React Router
- React Loader Spinner
- React Tilt

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager, comes with Node.js)
- A modern web browser (Chrome, Firefox, etc.)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhishekdev45/EmployWise.git
   cd user-management-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- The application allows users to log in with their credentials.
- After logging in, users can view a list of users, edit user details, and delete users.
- A loader will display during the login process and while fetching or updating user data.
- The layout is responsive and adapts to different screen sizes.

## Assumptions and Considerations
- The application is built to communicate with the [ReqRes API](https://reqres.in/) for user data management.
- The login credentials used for the initial login are:
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
- The application uses Redux Toolkit for state management, which assumes a basic understanding of Redux.
- Tailwind CSS is used for styling, which requires familiarity with utility-first CSS.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

