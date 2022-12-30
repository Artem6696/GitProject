/*Primative data types*/

//string
const someText = 'Some text';
console.log(typeof someText);

//Number
const someNumber = 55 && 1.5 && -1.5;
console.log( typeof  someNumber);

//Boolean
const someBoolean = false && true;
console.log(typeof someBoolean);

//Null
const  someNull = null;   // object bags lang
console.log(typeof someNull);

//Undefined
let someUndefined;
console.log(typeof someUndefined);

//Symbols
const someSymbols = Symbol();
console.log(typeof someSymbols);

/*Reference data types - object*/                            //Refernce data types - Ссылочные типы данных

//Array
const someArray = [1, 2, 3, 4, 5];
console.log(typeof someArray);

//Object Literal
const someObjectLiteral =
    {
        firstProperty: '12',                                   //Property - Свойство
        secondProperty: 12
    };
console.log(typeof someObjectLiteral);

//Function
const someFunction = new Function();
console.log(typeof someFunction);

//Data
const someDate = new Date();
console.log(typeof someDate);

