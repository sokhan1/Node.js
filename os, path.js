const os = require('os');

console.log(os.cpus);
const path =require('path');

path.join(__dirname,'..', 'func.js');
path.resolve(__dirname,'..','/func.js')

const string=__filename;

console.log('path.sep:',path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('------------------------')
console.log('path.dirname:',path.dirname(string));
console.log('path.extname:',path.extname(string));
console.log('path.basename:',path.basename(string));
console.log('path.basename-extname:',path.basename(string,path.extname(string)));
console.log('--------------------------');
console.log('path.parse:',path.parse(string));
console.log('path.format:',path.format({
    dir: 'C:\\users\\dsdsd',
    name:'path',
    ext:'.js'
}));
