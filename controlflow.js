//FROM VIDEO 3

//FOR LOOPS

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const naam = ['drake', 'travis', 'malonne'];

// for(let i = 0; i < naam.length; i++){
//     //console.log(naam[i]);
//     let html = `<div>${naam[i]}</div>`;
//     console.log(html);
// }


//WHILE LOOPS

// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// let i = 0;
//  while(i < 5){
//     console.log('in loop:', i);
//     i++;
//  


//Do while loops

// let i = 2;

// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5);




//if statements and if else
// const ages = 25;

// if(ages > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'mary', 'dream'];

// if(ninjas.length > 4){
//     console.log("that's alot of ninjas");
// 


// const password = 'password1234';

// if(password.length >= 12){
//     console.log('very strong password!');
// } else if(password.length >= 8){
//     console.log('great password!!!');
// } else {
//     console.log('weak password!');
// }


//logical operators - OR || and AND &&


// const password = 'p@ssword1234';

// if(password.length >= 12 && password.includes('@')){
//     console.log('very strong password!');
// } else if(password.length >= 8 || password.includes('@') && password.length >=5){
//     console.log('great password!!!');
// } else {
//     console.log('weak password!');
// 


//Logical NOT (!)

// let user = true;

// if(!user){
//     console.log('you must login first');
// } else {
//     console.log('welcome back!');
// }
/*
const scores = [50, 40, 0, 30, 50, 10, 100, 120, 140];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue
    }
    console.log('your screen: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats you got the top score!');
        break;
    }
}
    */


//switch statements

// const grade = 'F';


// switch(grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//      case 'D':
//         console.log('you got an D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//      default:
//         console.log('not a valid grade')
    
// }

/*

//variables and block scope
let ages = 34; //global scope as it changes both the value in the if loop
                // (block scope)but if it the let age was made inside the if loop it would overwrite the pervious one and changes it to the new one



if(true){
   let ages = 40;// we are allowed to redefine the let inside the code block or the loop
   let namess = 'shaun';// this will change inside the code block but not outside the code block 
    console.log('inside 1st code block: ', ages, namess);//this is inside so it changes to 40

if(true){
    let ages = 50;
    console.log('inside 2nd code block: ', ages);
    }

}

    console.log('outside code block: ', ages, namess);// this is outside so remains same as  34
*/
