var json = {"test":"value"};
var incodingData = JSON.stringify(json); 
console.log(incodingData);

var str = '{"test" : "value"}';
var parsingData = JSON.parse(str);
console.log(str)

var Characters= [
    {'name':'A',
     'sex':'male',
     'age':18

    },

    {'name':'B',
     'sex':'female',
     'age':'17'

    }
]

var AddCharacter = {
    'name':'C',
    'sex':'male',
    'age':'38'
}
Characters.push(AddCharacter);
AddCharacter['adult'] = true;

var key = 'criminal';
AddCharacter[key]=0;
