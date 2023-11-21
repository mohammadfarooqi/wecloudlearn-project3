# ShyftLabs Backend

This project includes base files for the ShyftLabs exercise.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Routes](#routes)
  - [cURL Requests](#curl-requests)

## Project Structure

The project has the following structure:

- `config/`: Configuration files, including database configuration.
- `migrations/`: Database migration files.
- `seeds/`: Database seed files.
- `src/`: Source code files.
  - `controllers/`: Controllers for handling HTTP requests.
  - `routes/`: Express.js route definitions.
  - `services/`: Business logic services.
  - `utils/`: Utility functions.
  - `validations/`: Validation schemas.
  - `index.js`: Main application entry point.
- `.env_sample`: Sample environment configuration file.
- `knexfile.js`: Knex configuration file.
- `package.json`: Project dependencies and scripts.
- `README.md`: Project documentation (this file).

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed.
- PostgreSQL database.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammadfarooqi/shyftlabs-assignment.git
   ```

2. Install dependencies:

   ```bash
   cd shyftlabs-assignment/server
   npm install
   ```

### Configuration

1. Create a `.env` file based on the `.env_sample` file:

   ```bash
   cp .env_sample .env
   ```

2. Modify the `.env` file with your database and environment configuration.

3. Configure Knex.js for database migration and seeding by modifying the `knexfile.js`.

### Short Steps

Here are the short steps to get started:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create necessary tables:

   ```bash
   npm run knex:mg:latest
   ```

3. Seed the database with sample data:

   ```bash
   npm run knex:sd:run
   ```

4. Start the application:

   - For watch mode (development):

     ```bash
     npm run dev
     ```

   - Without watch mode:

     ```bash
     npm start
     ```

For more information on the project's dependencies and scripts, please refer to the [package.json](package.json) file.
