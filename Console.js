const string = 'abc';
const number = 1;
const boolean = True;
const obj = {
    outside:{
        inside:{
            Key: 'value',
        },
    },
};

console.time('Total time');
console.log('A');
console.log(string,number,boolean);
console.error('error message')

console.table([{'name' : 'zero', 'birth' : 1994},{'name':'hero','birth':1988}]);
console.dir(obj, {colors: false, depth:2});
console.dir(obj, {colors: true, depth:1});

function b(){
    console.trace('tracing')
}

function a(){
    b()
}
a();
console.timeEnd('Total time');
