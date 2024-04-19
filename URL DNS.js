import dns from 'dns/promises';
const ip =await dns.lookup('gilbut.co.kr');
console.log('IP',ip); // Get an ip
const a = await dns.resolve('gilbut.co.kr','A');
console.log('A',a);
const mx = await dns.resolve('gilbut.co.kr','MX');
console.log('MX',mx);
const cname = await dns.resolve('www.gilbut.co.kr','CNAME');
console.log('CNAME',cname);
const any = await dns.resolve('gilbut.co.kr','ANY');
console.log('ANY,any');

const url = require('url');

const {URL} = url;
const myURL= new URL('https://www.naver.com'); // Put longer address
console.log('new URL():',myURL);
console.log('url.format():',url.format(myURL));;

console.log('searchParams:',myURL.searchParams);
console.log('searchParams.getAll()',myURL.searchParams.getAll('category'));
console.log('searchParams.get()',myURL.searchParams.get('limit'));
console.log('searchParams.has',myURL.searchParams.has('page'));

console.log('searchParams.keys()',myURL.searchParams.keys());
console.log('searchParams.values',myURL.searchParams.values());

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));
