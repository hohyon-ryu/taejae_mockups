#!/bin/bash

# Build the React app
yarn build

# Copy the build files to the root directory
cp -r build/static .
cp build/asset-manifest.json .
cp build/favicon.ico .
cp build/logo192.png .
cp build/logo512.png .
cp build/manifest.json .
cp build/robots.txt .

# Commit and push the changes
git add .
git commit -m "Deploy to GitHub Pages (main branch)"
git push
