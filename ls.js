const fs = require('fs');

function lsExport() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
    }
  });
}

module.exports = {
  ls: lsExport,
};
