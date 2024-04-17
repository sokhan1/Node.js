const value = require('./CommomJsModule');
console.log(value);
const odd= value.odd;
const even= value.even;
const{ odd,even}=require('./CommomJsModule');

function checkOddOrEven(number){
    if(number % 2){
        return odd;
    }
    else{
        return even;
    }
}

module.exports =checkOddOrEven
