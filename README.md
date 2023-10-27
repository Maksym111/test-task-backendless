# React Test Task

## Overview

This project is a simple Content Management System (CMS) built using React, React Router, Webpack, and Vite. The system is designed to display and manage tabs with various contents, which can be loaded lazily as needed.

## Project Structure

The project consists of the following main components:

- **App**: The main application component that handles navigation between tabs and displays their content.

- **Navigation**: A component that displays the list of tabs and handles tab switching.

- **TabContent**: The component responsible for loading and displaying tab content. It supports lazy loading, meaning tab components are only loaded when needed.

- **tabs.json**: A JSON file containing descriptions of tabs, including their identifiers, titles, order, and the path to their respective components.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository to your local computer.

2. Install the required dependencies by running: npm install.

3. Start the project by running: npm run dev.

4. Open your web browser and go to `http://localhost:5173/test-task-backendless/` to view the application.

## Additional Information

- This project is created for testing skills and can serve as a starting point for developing more complex React applications.

- You can customize the tabs and their content by editing the `tabs.json` file and creating the corresponding components for each tab.

- The project utilizes lazy loading of components, ensuring fast application loading and resource optimization.
