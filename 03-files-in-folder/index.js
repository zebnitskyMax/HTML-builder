const fs = require('fs');
const path = require('path');
const pathName = path.join(__dirname, 'secret-folder');
console.log(pathName);
fs.readdir(path.join(__dirname, 'secret-folder'), (err, data) => {
  if (err) throw err;
  for (const el of data) {
    // console.log(path.extname(el));
    // console.log(path.basename(el));
    // console.log(el.name);
    console.log(`${path.basename(el)} - ${path.extname(el)}`);
  }
});
