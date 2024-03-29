const fs = require('fs');
const path = require('path');
const pathName = path.join(__dirname, 'secret-folder');
console.log(pathName);
fs.readdir(path.join(__dirname, 'secret-folder'), (err, data) => {
  if (err) {
    err;
    return;
  }
  for (const el of data) {
    // console.log(path.extname(el));
    // console.log(path.basename(el));
    // console.log(el.name);
    // console.log(`${path.basename(el)} - ${path.extname(el)}`);
    fs.stat(path.join(pathName, el), (err, stats) => {
      if (err) err;
      if (stats.isFile) {
        // console.log(el);
        // console.log(stats.size);
        if (stats.size) {
          let dotFindIndex = path.basename(el).split('').indexOf('.');
          console.log(
            `${path
              .basename(el)
              .split('')
              .slice(0, dotFindIndex)
              .join('')} - ${path.extname(el).slice(1, el.length)} - ${
              stats.size
            }b`,
          );
        }
      }
    });
  }
});
