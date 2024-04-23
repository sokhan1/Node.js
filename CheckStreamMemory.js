const fs = require('fs');

console.log('before:',process.memoryUsage().rss);

const readStream = fs.createReadStream('./filename');
const writeStream = fs.createWriteStream('./filename');
readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log('stream:',process.memoryUsage().rss);
})
