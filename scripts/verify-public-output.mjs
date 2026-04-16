#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const blockedTrackedPrefixes = ['yanming_cv/', 'private/'];
const blockedDistExtensions = new Set([
  '.pdf',
  '.tex',
  '.aux',
  '.out',
  '.synctex',
  '.gz',
  '.zip',
  '.7z',
  '.rar',
  '.tar',
  '.tgz',
  '.doc',
  '.docx',
]);

const violations = [];

checkTrackedFiles();
checkDistFiles();

if (violations.length > 0) {
  console.error('Public output verification failed:');
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log('Public output verification passed.');

function checkTrackedFiles() {
  try {
    const tracked = execFileSync('git', ['ls-files'], {
      cwd: rootDir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    for (const file of tracked) {
      if (blockedTrackedPrefixes.some((prefix) => file.startsWith(prefix))) {
        violations.push(`tracked private file: ${file}`);
      }
    }
  } catch (error) {
    violations.push(`could not inspect tracked files with git ls-files: ${error.message}`);
  }
}

function checkDistFiles() {
  if (!fs.existsSync(distDir)) {
    violations.push('dist/ does not exist after build');
    return;
  }

  walk(distDir);
}

function walk(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  for (const entry of entries) {
    const absolutePath = path.join(currentDir, entry.name);
    const relativePath = path.relative(rootDir, absolutePath);

    if (entry.isDirectory()) {
      walk(absolutePath);
      continue;
    }

    const lowerRelativePath = relativePath.toLowerCase();
    if (
      blockedTrackedPrefixes.some((prefix) =>
        lowerRelativePath.includes(`${prefix.toLowerCase()}`)
      )
    ) {
      violations.push(`private path leaked into dist: ${relativePath}`);
    }

    const parsed = path.parse(entry.name);
    const joinedExt = `${parsed.ext}${path.extname(parsed.name)}`.toLowerCase();
    const extensionsToCheck = new Set([parsed.ext.toLowerCase(), joinedExt]);
    for (const extension of extensionsToCheck) {
      if (blockedDistExtensions.has(extension)) {
        violations.push(`blocked file type in dist: ${relativePath}`);
        break;
      }
    }
  }
}
