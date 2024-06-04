import path from 'node:path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';
import formattedFile from './formatters/index.js';
import getDiffTree from './difftree.js';

const getFullPath = (file) => path.resolve(process.cwd(), file);

const readFile = (file) => {
  const filePath = getFullPath(file);
  return readFileSync(filePath, 'utf8');
};

const getExtension = (file) => path.extname(file).slice(1);

const getContent = (file) => {
  const extension = getExtension(file);

  return parse(readFile(file), extension);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const contentFile1 = getContent(file1);
  const contentFile2 = getContent(file2);
  const diffTree = getDiffTree(contentFile1, contentFile2);

  return formattedFile(diffTree, format);
};

export default genDiff;