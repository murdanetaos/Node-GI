const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2];
const fileExtension = `.${process.argv[3]}`;

// Read the directory asynchronously
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter files based on file extension
  const filteredFiles = files.filter(file => path.extname(file) === fileExtension);

  // Print the filtered files
  filteredFiles.forEach(file => console.log(file));
});
