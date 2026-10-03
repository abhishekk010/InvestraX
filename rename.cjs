const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (
        dirFile.endsWith('.jsx') ||
        dirFile.endsWith('.js') ||
        dirFile.endsWith('.html') ||
        dirFile.endsWith('.md')
      ) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  content = content.replace(/Zerodha/g, 'InvestraX');
  content = content.replace(/zerodha/g, 'investrax');
  content = content.replace(/ZERODHA/g, 'INVESTRAX');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

const frontendFiles = walkSync('./frontend');
const backendFiles = walkSync('./backend');

[...frontendFiles, ...backendFiles].forEach(replaceInFile);
console.log('Replacement complete.');
