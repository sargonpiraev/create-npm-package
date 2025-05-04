#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

// get project name
const projectName = process.argv[2]
if (!projectName) {
  console.error('Error: Please specify a project name.')
  process.exit(1)
}

// create project directory
const projectDir = path.resolve(process.cwd(), projectName)
if (fs.existsSync(projectDir)) {
  console.error(`Error: Directory '${projectName}' already exists.`)
  process.exit(1)
}
fs.mkdirSync(projectDir, { recursive: true })

// copy files
const files = [
  './../.husky/pre-commit',
  './../.husky/commit-msg',
  './../.editorconfig',
  './../.gitignore',
  './../.gitlab-ci.yml',
  './../.npmrc.example',
  './../.prettierrc.json',
  './../.releaserc.json',
  './../.commitlint.config.ts',
  './../eslint.config.ts',
  './../jest.config.ts',
]
for (const file of files) {
  const src = path.resolve(__dirname, file)
  const dest = path.resolve(projectDir, file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  if (fs.existsSync(dest)) {
    console.error(`Error: File '${file}' already exists in the destination.`)
    process.exit(1)
  }
  fs.copyFileSync(src, dest)
}

// create package.json
const thisPackageFile = fs.readFileSync('./package.json', 'utf8')
const thisPackageJson = JSON.parse(thisPackageFile)
const packageJson = {
  name: projectName,
  version: '0.0.1',
  description: '',
  main: './build/index.js',
  files: ['build'],
  scripts: thisPackageJson.scripts,
  devDependencies: thisPackageJson.devDependencies,
  dependencies: {},
  publishConfig: { access: 'public' },
}
const packageJsonPath = path.resolve(projectDir, 'package.json')
const packageJsonFile = JSON.stringify(packageJson, null, 2)
fs.writeFileSync(packageJsonPath, packageJsonFile)

// create empty src/index.ts
fs.mkdirSync(path.resolve(projectDir, 'src'))
fs.writeFileSync(path.resolve(projectDir, 'src/index.ts'), '')

console.log(`Success! Created '${projectName}' at ${projectDir}`)
