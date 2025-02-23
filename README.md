# Vercelibrary

[![Website](https://img.shields.io/badge/Website-vercelibrary.vercel.app-blue)](https://vercelibrary.vercel.app)

## Overview
**Vercelibrary** is a web-based platform that allows users to create an organized library for media of all types. Whether it's images, videos, music, documents, or links, Vercelibrary provides a structured and user-friendly interface to store, manage, and search for media efficiently.

## Features
- 📂 **Add Media**: Upload and categorize media files of various types.
- 🔍 **Search Functionality**: Quickly find media by title, URL, or metadata.
- 🗂 **Organized Library**: Group and tag media for easy access.
- 📖 **Customizable Entries**: Add descriptions, tags, and other metadata.
- 🔄 **Pagination & Sorting**: Navigate large collections with ease.
- 🌐 **Responsive Design**: Fully optimized for desktop and mobile users.
- 🛠 **Built with Modern Tech**: React, TypeScript, Prisma, and SQLite for a seamless experience.

## Tech Stack
- **Frontend**: React (Next.js), Tailwind CSS
- **Backend**: TypeScript, Node.js, Prisma ORM
- **Database**: PostgreSQL
- **Hosting**: Vercel

## Getting Started
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)

### Installation
```sh
# Clone the repository
git clone https://github.com/your-username/vercelibrary.git
cd vercelibrary

# Install dependencies
npm install

# Set up the database
npx prisma migrate dev --name init
npx generate prisma

# Run the development server
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

## Deployment
Vercelibrary is deployed on **Vercel**. To deploy your own version:
1. Push your repository to GitHub.
2. Connect the repository to [Vercel](https://vercel.com/).
3. Configure environment variables if needed.
4. Deploy and access your instance at `your-project.vercel.app`.

## Contributing
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests.

## Templated from
https://github.com/thejayadad/cbook2

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, visit [vercelibrary.vercel.app](https://vercelibrary.vercel.app) or open an issue on GitHub.

