
#!/bin/bash

# Build the project
echo "Building project for GitHub Pages..."
npm run build

# Create .nojekyll file if it doesn't exist
if [ ! -f "docs/.nojekyll" ]; then
  touch docs/.nojekyll
fi

echo "Build complete! Your site is ready in the /docs folder."
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Push your changes to GitHub"
echo "2. Go to your repository settings"
echo "3. Navigate to Pages section"
echo "4. Set source to 'Deploy from a branch'"
echo "5. Select 'main' branch and '/docs' folder"
echo "6. Save the settings"
