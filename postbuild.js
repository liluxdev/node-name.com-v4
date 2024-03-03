import fs from 'fs';
import path from 'path';

function addJsExtension(dirPath) {
  fs.readdirSync(dirPath).forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      addJsExtension(filePath);
    } else if (filePath.endsWith('.d.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/from '(\.\/[^\']*)'/g, "from '$1.js'");
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

addJsExtension('./dist');
