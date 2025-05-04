#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get the project name from the command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('Error: Please specify a project name.');
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);

if (fs.existsSync(projectDir)) {
  console.error(`Error: Directory '${projectName}' already exists.`);
  process.exit(1);
}

const filesToCopy = [
  '.editorconfig',
  '.gitignore',
  '.gitlab-ci.yml',
  '.npmrc.example',
  '.prettierrc.json',
  '.releaserc.json',
  'commitlint.config.js',
  'eslint.config.mjs',
  'jest.config.ts',
]

try {
  // Ensure the project directory exists
  fs.mkdirSync(projectDir, { recursive: true });

  for (const file of filesToCopy) {
    const srcPath = path.resolve(__dirname, file);
    const destPath = path.resolve(projectDir, file);

    // Ensure the destination directory exists
    const destDir = path.dirname(destPath);
    fs.mkdirSync(destDir, { recursive: true });

    // Copy the file
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
    } else {
      console.error(`Error: File '${file}' already exists in the destination.`);
      process.exit(1);
    }
  }
  console.log(`Success! Created '${projectName}' at ${projectDir}`);
} catch (err) {
  console.error('Error copying template:', err);
  process.exit(1);
}
