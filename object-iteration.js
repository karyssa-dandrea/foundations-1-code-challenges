// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return '';
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let newObj = {};
    let keys = Object.keys(someObject);
    keys.forEach((key)=>{
        let upperCaseKey = key.toUpperCase();
        newObj[upperCaseKey] = someObject[key];
    });    
    return newObj;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return [];
}
