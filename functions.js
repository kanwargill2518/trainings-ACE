//VIDEO 4 from Modern Javascripts 




//function declaration // here we are declaring the function
// function greet(){
//     console.log('hello there');
// }

// //function experssion
// const speak = function(){  //any time you get a variable and set it equal to function is called function expression and in this you use ; at the end of the curly brackets {} 
//     console.log('good day');
// };

// speak();
//similarly we can declare this as many time as we want

//greet();//this expression is used to execute the function
// greet(); // we can declare a multiple times
// greet();

//Java script does not hoist function expressions on function declarations
//so if you write the following const code after executing the code this wont hoist the code as it does not hoist the expressions only declarations.





//arguments and parameters


// const speak = function(name, time){  // we can put more than one value in the function and the argument
//     console.log(`good ${time} ${name}`);
// };

// speak('sehaj', 'morning'); //this is known as argument





// //invoking a function without passing anything

// const speak = function(name = 'sehaj',  time = 'night'){ //we gave these variable a value so that we dont need to put value in the execution code
//     console.log(`good ${time} ${name}`);
// };

// speak();// here we invoked the without passing the value in the experssion like we did before
// speak('kanwar', 'day');// these values will overwirite the the upper values of name and time 
// speak('kanwar')// if we write only one of the value it will change only one and the second one will remain the same







//returning values

// const calArea = function(radius){
//     return 3.14 * radius**2; //we can return this without storing it into the local variable like let or var 
// };

// const area = calArea(6); // when a function return a value we need to store it in a variable as now it has global scope
// console.log(area);// we can also save it by the other name, it is not important to save it by area as instead of that use can also use other variables

// // The benefit of this thing is that we can store this value and use it some where else











//arrow function
// const calArea = (radius) => {  //in arrow function dont use the word function
//     //also we dont need paranthesis () if we are passing a single parameter but if there are two parameter or there are zero parameter for example radius and circumference then we need to use the paranthesis.
//     // we can also avoid writing the return key word if we are passing only one action for example [ const calArea = (radius) => return 3.14 * radius**2; ] like this
//     return 3.14 * radius**2; // this the shorter version of the regular function method
// };



// const area = calArea(5);
// console.log('area is:', area);





//practising arrow functions

// const greet = function(){
//     return 'hello world';
// };

//turning this regular function using arrow function
// const greet = () => 'hello world';

// const result = greet();
// console.log(result);




// const bill = function(prodcut, tax){
//     let total = 0;
//     for(let i = 0; i < product.length; i++){
//         total += products[i] + products[i] * tax;

//     }
//     return total;
// } 


// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; products.length; i++);{
//     total += products[i] + products[i] * tax;
// }
// return total;
// };

// console.log(bill([23,30,40], 0.3));








// const name = 'sehaj';


// //functions
// //functions are invoked using peranthesis
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods
// //whereas methods is involed using dot notations
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);






//Callbacks and foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// };


// myFunc(value => {
//     //do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'shaun', 'sehaj'];


// people.forEach(function(person, index){
//     console.log(index, person);
// });

//OR


// people.forEach((person, index) => {
//     console.log(index, person);
// });



//calling the callback function

// const  logPerson = (person, index) => {
//     console.log(`${index} - 'hello' ${person}`);
// };

// people.forEach(logPerson);








//get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'sehaj'];

// let html = ``;

// people.forEach(function(person){
//     //create html template
//     html += `<li style="color: purple">${person}</li>`;

// });

// console.log(html);
//  ul.innerHTML = html;