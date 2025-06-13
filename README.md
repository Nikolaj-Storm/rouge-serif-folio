
# Academic Portfolio Website

A refined, multipage personal academic portfolio website built with React, Vite, and Tailwind CSS.

## Project info


**URL**: https://lovable.dev/projects/ae1261ec-ded9-4d99-8073-92a6ffe75e60

## Features

- Modern, minimal design with beige and bordeaux color palette
- Elegant serif typography throughout
- Responsive design for all devices
- Blog with Markdown support
- Projects gallery with detailed views
- Academic papers archive with APA citations
- Smooth animations and transitions

## Development

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages from the `/docs` folder.

### Automatic Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Go to your repository settings → Pages
4. Set source to "Deploy from a branch"
5. Select `main` branch and `/docs` folder
6. Your site will be available at `https://[username].github.io/[repository-name]/`

### Manual Deployment

```sh
# Build for production
npm run build

# Or use the deployment script
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

### Important Notes

- Update the `base` path in `vite.config.ts` to match your repository name
- Replace `[repository-name]` with your actual repository name
- The site builds to the `/docs` folder for GitHub Pages compatibility

## Technologies Used

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **State Management**: TanStack Query
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## License

This project is open source and available under the [MIT License](LICENSE).
