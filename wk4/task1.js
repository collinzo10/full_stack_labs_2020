const fs = require("fs");
const path = require("path");
const process = require("process");
let folder = process.cwd();
let ext = "." + process.argv[2];
console.log(`Current directory: $(folder)`);
console.log(`command arg-extension: $(ext)`);

let allFiles = FS.readdir(folder, (err, files) => {});
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  fs.readdir(
    "C:UsersBeatrDesktopSchool WorkSemester 6Full Stack 2Labwork week4",
    (err, files)
  );
});
