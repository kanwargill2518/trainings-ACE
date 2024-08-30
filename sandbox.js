//FROM VIDEO 1 AND 2


/*let age = 25;
let year = 2019;
console.log(age, year);

age = 30; // can override the value as much as you want
console.log(age);

const points = 100;// cannot overide the value
console.log(points);

var score = 75; // older way of creating
console.log(score);

// strings
console.log('hello world');

let email = 'kanwar@gmil.com';
console.log(email);

//string concatenation
let firstname = 'kanwar';
let lastname = 'gill';

let fullname = firstname + ' ' + lastname;
console.log(fullname);

// getting characters
console.log(fullname[0]);
console.log(fullname[4]);

//string length
console.log(fullname.length);

// string methods
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf('@') //this is an argument
console.log(index);*/
/*
//common string methods
let email = 'mario@hihih.com';

//let result = email.lastIndexOf('h'); // argument used to find the poisition of the alphabet

//let result = email.slice(1, 5);

//let result = email.substr(1, 6);

//let result = email.replace('m', 'w');

//let result = email.replace('h', 'n');

console.log(result);*/

//WITH NUMBER

let radius = 10;
const pi = 3.14;
//console.log(radius, pi);

//MATH operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**3;

//order of operation -  B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

//let likes = 10;

//likes = likes + 1;
//likes++; // short form of the above one
//likes--;
//likes += 10;
//likes -= 5;
//likes *= 4;
//likes /= 2;
//console.log(likes);

//NaN not a number
//console.log(5 / 'hello');
//console.log(5 * 'hello');

//Adding number to a string

//let result = 'the blog has' + ' ' + likes + ' ' + 'likes';
//console.log(result);

//template strings
/*const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;


//concatenatin way
//let result = ' The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
//console.log(result);

//template string way
//let result = `The blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);

// creating html template
let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} like</span>
`;
console.log(html);*/






//ARRAY

let ninja = ['shaun', 'ryu', 'chun-li'];

//ninja[1]= 'ken'; //overides the value
//console.log(ninja[1]);

//let ages = [20,24,34,45];
//console.log(ages[2]);

//let random = ['kanwar', 'sehaj', 'avi', '12', '12'];
//console.log(random);

//console.log(ninja.length);

//let result = ninja.join('-');
//let result = ninja.indexOf('chun-li');
//console.log(result);

//let result = ninja.concat(['ken', 'crystal']);
//let result = ninja.push('ken');// aleternates the original value
//result = ninja.pop(); //return the value it poped of the array
//console.log(result);





//NULL AND UNDEFINED DATA TYPES

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);






//Boolean Data type

//Methods can return booleans
// let email = 'kanwardeep@gmail.com';
// let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('@')//the include method is used in a string to see if the certain character appears in the string
//returns true in the console ia its @ but it's $ or any other character it will retuen false
// let result = names.includes('bowser');
//console.log(result);




//Comparison operators
// let age = 25;

// console.log(age == 25); //the double == means that it is saying the age is equal to 25
// console.log(age == 30);
// console.log(age != 30);// this means that the age is not equal to 30
// console.log(age > 20);// this means the age is greter than 20 and it will return true
// console.log(age > 30);// this will return false as age is not greater than 25
// console.log(age <= 25);//this will return true as it is not less than but it is equal to
// console.log(age >= 25);//this will return true as it is not greater but it is equal

//With Strings

// let names = 'shaun';

// console.log(names == 'shaun');
// console.log(names == 'Shaun');// this will return false because in script the the lowercase letter are bigger than uppercase  letter
// console.log(names > 'Cystal');// this will return true  because thr letteres which comes later are bigger than the letter which comes first
// console.log(names > 'Shaun');// this will return false because in script the the lowercase letter are bigger than uppercase  letter


let age = 25;

//loose compariosn diffferent types can still be equal

// console.log(age == 25);// this is called as loose comparison
// console.log(age == '25');// script converts this string to number to make comparison and returns it true


// console.log(age != 25);
// console.log(age != '25');


// strict comparison (different types cannot be equal)

//the triple equals === is a strict comparison which means is compare on he bases of noth vale and the data type

// console.log(age === 25);
// console.log(age === '25');

// console.log(age !== 25); //return false because age is 25 (value)
// console.log(age !== '25'); //return true because it is a string(datatype)




//type conversion
// let score = '100';

// // score = Number(score);//converting the string datatype into number data type
// // console.log(score + 1);
// // console.log(typeof score);

// //let result = Number('hello');
// //let result = String(50);
// //let result = Boolean(0);
// let result = Boolean('0');


// console.log(result, typeof result);











