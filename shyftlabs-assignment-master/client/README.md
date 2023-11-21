# ShyftLabs Frontend

This project is the frontend part of the ShyftLabs exercise. It provides a user interface for managing and displaying Students, Courses, and Results.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Configuration](#configuration)

## Project Structure

The project has the following structure:

- `src/`: Source code files.
  - `components/`: React components.
  - `pages/`: React pages.
  - `services/`: Service modules for API communication.
  - `utils/`: Utility/Helper functions.
  - `App.js`: Main application component.
- `public/`: Public files (HTML, images, etc.).
- `package.json`: Project dependencies and scripts.
- `README.md`: Project documentation (this file).

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed.
- Backend API (Ensure the backend API is running and accessible).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammadfarooqi/shyftlabs-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shyftlabs-assignment/client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server to run the application locally:

```bash
npm start
```

By default, the application will run on `http://localhost:3000`. You can access it in your web browser.

## Usage

- The application displays a list of students, courses, and results.
- You can add students, courses, and results.
- You can delete students and courses.

## Configuration

### Environment Configuration

Create a `.env` file based on the provided `.env_sample` file and configure it with the following values:

```
REACT_APP_API_BASE_URL=YOUR_BACKEND_API_URL
```

Replace `YOUR_BACKEND_API_URL` with the URL of your backend API, ie. `http://localhost:8080`.

Make sure to restart the development server after configuring the `.env` file.
