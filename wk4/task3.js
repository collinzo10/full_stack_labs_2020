setInterval(() => null, 1000);

process.on("exit", () => console.log());
process.on("SIGINT");
