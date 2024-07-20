const fs= require('fs');

console.log('before:',process.memoryUsage().rss);

const data1=fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream)
readStream.on('on', ()=>{
console.log('buffer',process.memoryUsage().rss)
})
