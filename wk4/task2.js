const process = require("process");
console.log("== System ==");
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log("== NodeJS ==");
console.log(`Node Version: ${process.version}`);
console.log("== Process ==");
console.log(`Pid: ${process.pid}`);
console.log(`title: ${process.title}`);
console.log(`Current directory: ${process.cwd()}`);
