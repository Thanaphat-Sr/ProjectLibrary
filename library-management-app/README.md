# Library Management Application

## Overview
This is a library management application designed to manage book information, authors, members, and borrowing history. The application allows users to retrieve book information, search for books, manage authors and members, and track borrowing activities.

## Features
- Manage book information (title, ISBN, category)
- Associate each book with one author (who can write multiple books)
- Manage member information (member ID, first name, last name, phone number)
- Track borrowing history (borrower, number of books borrowed, due date, actual return time)
- Endpoints for:
  - Retrieving all book information
  - Searching for books by title
  - Listing all authors
  - Displaying members by name and member ID
  - Searching for books with due dates
  - Identifying books that have not yet been returned

## Project Structure
```
library-management-app
├── src
│   ├── controllers
│   ├── db
│   ├── models
│   ├── routes
│   ├── seed.ts
│   ├── app.ts
│   └── types
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd library-management-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Use the following endpoints to interact with the application:
   - `GET /books` - Retrieve all book information
   - `GET /books/search?title=<title>` - Search for books by title
   - `GET /authors` - List all authors
   - `GET /members` - Display members by name and member ID
   - `GET /books/due` - Search for books with due dates
   - `GET /books/overdue` - Identify books that have not yet been returned

## Seed Data
The application includes seed data for books, authors, members, and borrowing history. This data can be populated in the database by running the seed script.

## License
This project is licensed under the MIT License.