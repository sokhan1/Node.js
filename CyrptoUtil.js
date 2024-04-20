const crypto = require('crypto');

console.log('base64:',crypto.createHash('sha512').update('password').digest('base64'));
console.log('hex:',crypto.createHash('sha512').update('password').digest('hex'));
console.log('base64:',crypto.createHash('sha512').update('another password').digest('base64'));

const crypto2 = require('crypto');
crypto.randomBytes(64,(err,buf)=>{
    const salt =buf.toString('base64');
    console.log('salt:',salt);
    crypto.pbkdf2('password',salt,100000,64,'sha512',(err,key)=>{
        console.log('password:',key.toString('base64'));
    }
);
}
);

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y)=>{
    console.log(x+y); 
},'dontUseMe blah blah blah');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf) => {
    console.log(buf.toString('base64'))
})
.catch((error)=>{
    console.error(error);
})
