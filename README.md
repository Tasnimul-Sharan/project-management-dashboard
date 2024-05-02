# Project Management Dashboard

This is a project management dashboard built with Next.js, Ant Design, React Query, Zustand, and Tailwind CSS. It allows users to manage tasks and projects with features such as authentication, project overview, project details, task management, and more.

### Live Link : [`https://project-management-dashboard-tau.vercel.app/`](https://project-management-dashboard-tau.vercel.app/).

## Login Credentials
Use the following login credentials to access the dashboard:

- Email: admin@gmail.com
- Password: 1234

These credentials simulate a basic authentication system for this demo. If the login is successful, you'll be redirected to the projects overview page.

## Features
- **Authentication**: Login form with validation using Ant Design. Mock backend response for successful and unsuccessful logins.
- **Projects Overview**: Displays a list of projects with CRUD operations. React Query is used for asynchronous data fetching.
- **Project Details**: Detailed information for each project, including tasks, team members, and recent activities.
- **Task Management**: Tasks can be added, edited, or marked as completed. Drag-and-drop for changing task statuses with Zustand.
- **Task Filters and Search**: Allows users to filter tasks by various criteria and provides a search bar for quick task searches.
- **Interactive Dashboard**: Ant Design modals, dropdowns, and tooltips for interactivity. Tailwind CSS for responsive design.

## Technical Requirements
- Framework: Next.js for routing and server-side rendering.
- State Management: Zustand for managing global state.
- Data Fetching: React Query for asynchronous data fetching and cache management.
- UI Components: Ant Design for pre-built UI components.
- Styling: Tailwind CSS for responsive design.


## Setup Instructions
To run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Tasnimul-Sharan/project-management-dashboard.git

```bash
npm i
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
