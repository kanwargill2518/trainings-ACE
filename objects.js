// object literal
// we use curly brackets to make object notations

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'kanwar@gmail.com',
//     location: 'winnipeg',
//     blogs: ['wingardium laviousa', 'ahh shit here we go again']
// };

// console.log(user);
// console.log(user.name);

 //we can also update the exsiting property
 //user.age = 35;
// console.log(user.age);


// //we can access thr properties using square brackets notations




// console.log(user['email']); 
 //we can also update these propeties

// user['name'] = 'sehaj';
// console.log(user['name']);


// console.log(typeof user);










//Adding object method
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'kanwar@gmail.com',
//     location: 'winnipeg',
//     blogs: ['wingardium laviousa', 'ahh shit here we go again'],
//     //methods are still a function but they are being defined on an object
//     login: function(){ // we also can write these function like this
//                     //login (){}                   
//         console.log('the user is loggged in');
//     },
//     logout: function(){// same with this one
//                         //logout(){}
//         console.log('the user is logged out');
//     },
//     logBlogs: function(){
//         //in order to use "this" keyword we need to use the "function" keyword and not the arrow function 
//         //this keyword is a context object and it represents the context in which the current code is executed 
//         //so depending on where and how we use it its value is going to be different 
//         //console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };


// user.logBlogs();
// // user.logout();
// // user.login();





//Adding objects in the array
// const blogs = [
//     { title: 'wingardium laviousa', like: 100 },
//     { title: 'ahh shit here we go again', like: 299}
// ];
// console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'kanwar@gmail.com',
//     location: 'winnipeg',
//     blogs:  [
//         { title: 'wingardium laviousa', like: 100 },
//         { title: 'ahh shit here we go again', like: 299}
//     ],

//     login(){ 
                                 
//         console.log('the user is loggged in');
//     },
//     logout(){
//         console.log('the user is logged out');
//     },
//     logBlogs(){
        
//         //console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.like);
//         })
//     }
// };

// user.logBlogs();








// //MATH OBJECTS
// console.log(Math.PI);

// const area = 7.10;
// //Math methods
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));


// //random number
// const random = Math.random();

// console.log(random);//show any decimal number between 0 and 1
// console.log(Math.round(random));//shows only 0 and 1
// console.log(Math.round(random * 100));//shows random number between 0 to 100


/*
//PRIMITIVE TYPES          
-NUMBER
-STRINGS
-BOOLEANS
-NULL
-UNDEFINED
-SYMBOLS
these are stores on the stacks

//REFERENCE TYPES
-ALL TYPES OF OBJECTS
-OBJECT LITERAL
-ARRAYS
-FUNCTIONS
-DATES
-ALL OTHER OBJECTS
these are stored on the heap
*/




//primitive value

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;// if we change the value of one variable the second time it wont affect the second one after the change
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);




//reference types
// userOne = { name: 'sehaj', age: '19' };
// userTwo = userOne;

// console.log(userOne, userTwo);


// userOne.name = 'kanwar'; //in reference type it will change the the value of the both the variables
// console.log(userOne, userTwo);
