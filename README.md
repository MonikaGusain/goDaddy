
# GoDaddy Repositories React App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)

A React-based web application that fetches and displays GoDaddy's public GitHub repositories. Users can explore repository details such as description, language, forks, open issues, and watchers. Built with modern tools and best practices, this project demonstrates my ability to create clean, maintainable, and testable code.

---

## Features

- **Repository List**: Fetches and displays a list of GoDaddy's public repositories from the GitHub API.
- **Repository Details**: Clicking on a repository shows detailed information, including:
  - Title
  - Description
  - Link to the repository
  - Language(s) used
  - Number of forks, open issues, and watchers
- **End-to-End Testing**: Comprehensive test coverage using Playwright.

---

## Technologies Used

- **Frontend**:
  - React: For building the user interface.
  - React Router DOM: For navigation between pages.
  - Axios: For making HTTP requests to the GitHub API.
  - CSS: For styling the application.
- **Testing**:
  - Playwright: For end-to-end testing.
- **Tools**:
  - GitHub API: For fetching repository data.
  - npm: For dependency management.

---

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps

1. **Clone the repository**:

   \`\`\`bash
   git clone https://github.com/your-username/godaddy-repos.git
   cd godaddy-repos
   \`\`\`

2. **Install dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**:

   \`\`\`bash
   npm start
   \`\`\`

4. **Run tests**:

   \`\`\`bash
   npx playwright test
   \`\`\`

5. **View the app**:

   Open your browser and navigate to \`http://localhost:3000\`.

---

## Project Structure

\`\`\`
godaddy-repos/
├── public/                  # Static assets
├── src/
│   ├── component/          # React components
│   │   ├── ReposList.js     # Component to display the list of repositories
│   │   └── RepoDetail.js    # Component to display repository details
│   ├── App.js               # Main app component with routing
│   ├── index.js             # Entry point for the app
│   ├── App.css              # Basic CSS styles
│   └── index.css            # Global styles
├── tests/                   # Playwright end-to-end tests
│   ├── reposList.spec.js    # Tests for the repository list page
│   └── repoDetail.spec.js   # Tests for the repository details page
├── package.json             # Project dependencies and scripts
├── README.md                # This file
└── .gitignore               # Files and directories to ignore in Git
\`\`\`

---

## Challenges and Solutions

1. **Challenge**: Fetching and displaying data from the GitHub API.
   - **Solution**: Used Axios for efficient API calls and implemented error handling for network issues.

2. **Challenge**: Writing reliable end-to-end tests.
   - **Solution**: Used Playwright to simulate user interactions and validate UI behavior.

---

## About Me

Hi! I'm Monika Gusain, a passionate Frontend Developer with experience in building modern web applications. I enjoy solving complex problems and creating user-friendly interfaces.

- **LinkedIn**: https://www.linkedin.com/in/monika-gusain-136608187/
- **GitHub**: https://github.com/MonikaGusain
- **Email**: monagusain74@gmail.com

---
