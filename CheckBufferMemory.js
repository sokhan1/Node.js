const fs = require('fs');

console.log('before:',process.memoryUsage().rss);

const data1 = fs.readFileSync('./filename');
fs.writeFileSync('./filename',data1);
console.log('buffer:',process.memoryUsage().rss);
