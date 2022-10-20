const os = require ("os");
//console.log(os.userInfo());
//console.log(os.uptime());
//console.log(os.version());

const path = require ("path");
console.log(path.resolve(__dirname, "content", "first.txt"));
