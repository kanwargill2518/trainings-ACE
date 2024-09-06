/*
//Video 6 Modern Javascripts
-Document object model (DOM)
-add,change delete content
-make acool pop-up effect in the web page 




//Documetn Object Model
-created  by the browser
-documetn object 
*/

// const para = document.querySelector('.error');

// console.log(para);

// const para = document.querySelector('div.error');

// console.log(para);

// const para = document.querySelector('body > h1');

// console.log(para);




// Grabbing multiple elements

// const paras = document.querySelectorAll('p');

// const errors = document.querySelectorAll('.error');

// console.log(errors); // we can also select which p element we want to show by selecting the index.




//get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);


// // get element by their classname
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


//get elements by thier tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras[0]);








//changing inner tesxt
// const para = document.querySelector('p');
// para.innerText = 'my name is kanwardeep';

//console.log(para.innerText);

//  const paras = document.querySelectorAll('p');

// paras.forEach(para => {
// console.log(para.innerText);
// para.innerText += 'new text';
// })



// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new H2</h2>';




// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'There Ninja Website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;');





// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');//this would override the style inside the html.

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';

// title.style.color = 'crimson'; //changes the color property


// title.style.fontSize = '60px';




//ADDING OR REMOVING CLASSES
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');



// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success');
//     }
// });


const title = document.querySelector('.title');

title.classList.toggle('test');
