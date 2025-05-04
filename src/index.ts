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
const isProjectDirExists = fs.existsSync(projectDir)
if (isProjectDirExists) {
  console.warn(`Warning: Directory '${projectName}' already exists.`)
} else {
  fs.mkdirSync(projectDir, { recursive: true })
}

// copy files
const files = [
  '.husky/pre-commit',
  '.husky/commit-msg',
  '.editorconfig',
  '.gitignore',
  '.gitlab-ci.yml',
  '.npmrc.example',
  '.prettierrc.json',
  '.releaserc.json',
  'commitlint.config.ts',
  'eslint.config.ts',
  'jest.config.ts',
  'tsconfig.json',
]
for (const file of files) {
  const src = path.resolve(__dirname, '..', file)
  const dest = path.resolve(projectDir, file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  const isDestFileExists = fs.existsSync(dest)
  if (isDestFileExists) {
    console.warn(`Warning: File '${file}' already exists in the destination.`)
  } else {
    fs.copyFileSync(src, dest)
  }
}

// create package.json
const thisPackagePath = path.resolve(__dirname, '..', 'package.json')
const thisPackageFile = fs.readFileSync(thisPackagePath, 'utf8')
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
  types: './build/index.d.ts',
}
const packageJsonPath = path.resolve(projectDir, 'package.json')
const packageJsonFile = JSON.stringify(packageJson, null, 2)
fs.writeFileSync(packageJsonPath, packageJsonFile)

// create empty src/index.ts
const srcDir = path.resolve(projectDir, 'src')
const isSrcDirExists = fs.existsSync(srcDir)
if (isSrcDirExists) {
  console.warn(`Warning: Directory 'src' already exists in the destination.`)
} else {
  fs.mkdirSync(srcDir)
}
const srcIndexPath = path.resolve(srcDir, 'index.ts')
const isSrcIndexExists = fs.existsSync(srcIndexPath)
if (isSrcIndexExists) {
  console.warn(`Warning: File 'index.ts' already exists in the destination.`)
} else {
  fs.writeFileSync(srcIndexPath, '')
}

console.log(`Success! Created '${projectName}' at ${projectDir}`)
