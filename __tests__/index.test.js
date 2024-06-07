import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['file1.json', 'file2.json', 'result_stylish.txt', 'stylish'],
  ['file1.yaml', 'file2.yaml', 'result_stylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'result_plain.txt', 'plain'],
  ['file1.yaml', 'file2.yaml', 'result_plain.txt', 'plain'],
  ['file1.json', 'file2.json', 'result_json.txt', 'json'],
  ['file1.yaml', 'file2.yaml', 'result_json.txt', 'json'],
])('formatters comparison', (file1, file2, testFile, format) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), format)).toEqual(readFile(testFile));
});
