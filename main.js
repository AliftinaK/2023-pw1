
    //Task #1 - conditional operator
// let x = parseInt(prompt("Ввидите число от 0 до 9"))
//     switch(x){
//     case 0:
//         console.log("0");
//         break;
//     case 1:
//         console.log("Один");
//         break;
//     case 2:
//         console.log("Два");
//         break;
//     case 3:
//         console.log("Три");
//         break; 
//     case 4:
//         console.log("Четыре");
//         break;
//     case 5:
//         console.log("Пять");
//         break;
//     case 6:
//         console.log("Шесть");
//         break;
//     case 7:
//         console.log("Семь");
//         break;
//     case 8:
//         console.log("Восемь");
//         break;
//     case 9:
//         console.log("Девять");
//         break;
// }

//Task #2 - loops
// function summa (a,b){
//     let sum = 0;
//     for (let i= a; i <= b; i++){
//         if (i % 2 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(summa(1,60));
// console.log(summa(8,23));

//Task #3 - conditional operator
// let a = parseInt(prompt('a = '))
// let b = parseInt(prompt('b = '))
// let c = parseInt(prompt('c = '))
// console.log(Math.max(a,Math.max(b,c)));
// console.log(Math.min(a,Math.min(b,c)));

//Task #4 - functions
// function ucFirst(str) {

// const upper = str.charAt(0).toUpperCase() + str.slice(1);
// return upper;
// }
// const str = prompt('Enter a string: ');
// const result = ucFirst(str);
// console.log(result);

//Task #5 - String

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// let str = prompt("Vvedite cislo $")
// let value = extractCurrencyValue(str);
// console.log(value);

//Task #6 - conditional operator

// let value = prompt('Vvedite cislo', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( "Error" );
// }

//Task #7 - conditional operator

//let age = parseInt(prompt("Vvedite vozrast  "));

// if (age >= 14 && age <= 90){
// alert("Exzact!!!")
// }
// else{
//     alert("error")
// }



// if (!(age < 14 || age > 90)){
//   alert("Exzact!!!")
//  }
// else{
//     alert("error") 
// }

//Task #8 - conditional operator



// let userName = prompt("Vvedite loghin", '');

// if (userName === 'user1') {

//   let pass = prompt('Vvedite paroli', '');

//   if (pass === '1111') {
//     alert( 'Privet' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Oshibca Validatii');
//   } else {
//     alert( 'Nevernii paroli' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Oshibca Validatii' );
// } else {
//   alert( "Cto vi" );
// }

//Task #9 - user interaction
// let name = prompt("Vashe imea?", "");
// alert(`Привет,${name}!`);
// let isFamiliar = confirm("Vi znacomi с JavaScript?");
//     if (isFamiliar){
//         alert("Molodet!!!");
//     }else{
// alert("Mojno naceati izucenie seiceas");
//     }

//Task #10 - conditional operator and loops

// function delitel(number){
//     let divisors = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors.push(i);
//     }
//   }
//   console.log(`Deliteli cisla ${number}: ${divisors.join(', ')}`);
  
// }

// delitel(number = prompt(""));

//3.4.2 Practical tasks for Arrays
//Task #1 - array display

//const numbers = [1,2,3,4,5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// let i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < numbers.length);


// for (let i in numbers) {
//   console.log(numbers[i]);
// }


// for (let number of numbers) {
//   console.log(number);
// }
//numbers.forEach(number => console.log(number));
//numbers.map(number => console.log(number));

//Task #2 - array processing
//let array = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];
// function sort(array){
//     array.sort ((a,b) => b - a);
//     console.log(array);
// }
// sort(array);
// function LessThanFive(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 5) {
//       console.log(array[i]);
//     }
//   }
// }
// LessThanFive(array)
// function MaxMin(array) {
//   let max = array[0], min = array[0];
//   let maxIndex = 0, minIndex = 0;
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//       maxIndex = i;
//     } else if (array[i] < min) {
//       min = array[i];
//       minIndex = i;
//     }
//   }
//   console.log(`Max element ${max} na pozitii ${maxIndex}`);
//   console.log(`МMax element ${min}  na pozitii ${minIndex}`);
// }
// MaxMin(array)

// function ThanAverage(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   let avg = sum / array.length;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > avg) {
//       console.log(array[i]);
//     }
//   }
// }
// ThanAverage(array)

//Task #4 - array processing

// function sumInputNumbers() {
//   let inputArr = [];

//   while (true) {
//     let userInput = prompt("Vvedite cislo:");

//     if (userInput === null || userInput === "" || !isFinite(userInput)) {
//       break;
//     }

//     inputArr.push(+userInput);
//   }

//   let sum = 0;

//   for (let num of inputArr) {
//     sum += num;
//   }

//   return sum;
// }
// console.log(sumInputNumbers());

//Task #5 - arrow methods and array functions

// function convert(fn, array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(fn(array[i]));
//   }

//   return result;
// }

// function square(x) {
//   return x * x;
// }
// console.log(convert(square, [1, 2, 3, 4])); 
// console.log(convert(square, []));

//Task #7 - array functions
//  start =parseInt(prompt("")); 
//  end =parseInt(prompt ("")); 
// function extract(start, end) {
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   return arr.slice(start, end + 1);
// }
// console.log (extract(start, end))

//3.5.2 Practical tasks for Objects
//Task #1 - object creation

// let user = {};
// user={name : "John"};
// user={surname : "Smith"};
// user.name = "Pete"
// delete user.name

//Task #2 - working with properties
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// console.log(menu);

//Task #5 - object processing
// let person = {
// 	name: `Person`,
// 	age: 123,
// 	salary: 1542.33,
// 	contacts: {
// 		phone: `112`,
// 		email: `email@domain.com`
// },
// address: `Moldova`
// }
// person.contacts.phone=`+37312345678`;
// delete person.address

//Task #8 - working with keys
// const weekDays = {
// 	"Mo": "Ponedelinic",
// 	"Tu": "Vtornic",
// 	"We": "Sreda",
// 	"Th": "Cetverg",
// 	"Fr": "Piatnita",
// 	"Sa": "Subbota",
// 	"Su": "Voscresenie",
// }
// function translate(obj) {
//   const translations = {
//     "Mo": "Luni",
//     "Tu": "Marti",
//     "We": "Miercuri",
//     "Th": "Joi",
//     "Fr": "Vineri",
//     "Sa": "Simbata",
//     "Su": "Duminica",
//   };

//   const result = {};
//   for (let k in obj) {
//     if (k in translations) {
//       result[k] = [translations[k]];
//     } else {
//       result[k] = obj[k];
//     }
//   }
//   return result;
// }
// const translatedWeekDays = translate(weekDays);
// console.log(translatedWeekDays);

//3.7.2 Practical tasks for JSON
//Task #1 - converting Array to JSON
// const names= ["james", "jake"];
// const xo = JSON.stringify(names);
// console.log (xo)

//Task #2 - converting Object to JSON
 //const power={voltage: 250,current: 12};
 //const CP = JSON.stringify (power);
 //console.log (CP)
//Task #3 - converting JSON to Array

// const names= `["james", "jake"]`;
// const xo = JSON.parse(names);
// console.log (xo)

//Task #4 - converting JSON to Object
// const IK=`{"name": "Ion Creanga", "age": "123"}`;
// const UK = JSON.parse(IK);
// console.log(UK)

//Task #6 - parsing JSON

// const employees = [
//   {
//     name: "John",
//     surname: "Doe",
//     position: "Manager",
//     salary: 5000,
//   },
//   {
//     name: "Jane",
//     surname: "Doe",
//     position: "Developer",
//     salary: 4000,
//   },
//   {
//     name: "Bob",
//     surname: "Smith",
//     position: "Developer",
//     salary: 3500,
//   },
// ];


// function printEmployees() {
//   let output = "";
//   employees.forEach(function (employee) {
//     output += `<div>${employee.name} ${employee.surname} - ${employee.position}, Salary: ${employee.salary}</div>`;
//   });
//   document.getElementById("employees-list").innerHTML = output;
// }


// function calculateSalary() {
//   let sum = 0;
//   let min = Infinity;
//   let max = -Infinity;

//   employees.forEach(function (employee) {
//     sum += employee.salary;
//     if (employee.salary < min) {
//       min = employee.salary;
//     }
//     if (employee.salary > max) {
//       max = employee.salary;
//     }
//   });

//   let average = sum / employees.length;

//   document.getElementById(
//     "salary-info"
//   ).innerHTML = `Average salary: ${average}, Minimum salary: ${min}, Maximum salary: ${max}, Total salary: ${sum}`;
// }

// printEmployees();

// calculateSalary();

//4.1.2.	Practical tasks for DOM
//Task #1 - document loading event
// document.addEventListener('DOMContentLoaded', function() {
//   document.body.style.backgroundColor = 'red';
// });


//Task #2 - document loading event
// document.addEventListener('DOMContentLoaded', function() {
//   setTimeout(function() {
//     document.body.style.backgroundColor = 'green';
//   }, 3000);
// });

//Task #5 - changing DOM
// Poluceaem element straniti 
// const minusBtn = document.getElementById('minus-btn');
// const numberInput = document.getElementById('number-input');
// const plusBtn = document.getElementById('plus-btn');

// // Obrabotcic dlea cnopchi
// minusBtn.addEventListener('click', function() {
//   let currentValue = parseInt(numberInput.value); //  Poluceaem tecusee znacenie iz puncta i preobrazuem v cislo
//   if (currentValue > 0) { // Esli tecusee znacenie bolise 0, umenisaen na 1 i  zapisi v input
//     currentValue--;
//     numberInput.value = currentValue;
//   }
//   if (currentValue === 0) { // Esli tecusee znacenie ravno 0, delaem cnopcu  - neactivnoi
//     minusBtn.disabled = true;
//   }
//   plusBtn.disabled = false; // Vsegda delaem cnipcu  + activnoi
// });

// // Obrabotcic sobitii dlea cnopchi +
// plusBtn.addEventListener('click', function() {
//   let currentValue = parseInt(numberInput.value); // Poluceaem tecusee znacenie iz puncta i preobrazuem v cislo
//   if (currentValue < 9) { //  Esli tecusee znacenie menishe 9, uvelicivaem na 1 i  zapisi v input
//     currentValue++;
//     numberInput.value = currentValue;
//   }
//   if (currentValue === 9) { // Esli tecusee znacenie ravno 9, delaem cnopcu  + neactivnoi
//     plusBtn.disabled = true;
//   }
//   minusBtn.disabled = false; // Vsegda delaem cnipcu  - activnoi
// });
//Task #6 - adding elements to DOM


// const boardSize = 8; // Razmer doschi
//     const table = document.querySelector('#chessboard'); // вvibiraem tablitu

//     for (let i = 0; i < boardSize; i++) { // ticl 
//         const row = document.createElement('tr'); // sozdaeom strocu  nabliti 
//         for (let j = 0; j < boardSize; j++) { // ticl dlea iaceec tabliti
//             const cell = document.createElement('td'); //  sozdaiom iaceicu tabliti
//             if ((i + j) % 2 === 0) { // opredeleaem, cacuiu iaceicu zacrasiti ciornim
//                 cell.style.backgroundColor = 'black';
//             }
//             row.appendChild(cell); // dobavleaem iaceicu v strocu 
//         }
//         table.appendChild(row); // dobavleaem scutrocu v tablitu
//     }
//Task #10 - DOM elements properties



// const field = document.querySelector('#field');
// const ball = document.querySelector('#ball');

// const fieldRect = field.getBoundingClientRect();
// const ballRect = ball.getBoundingClientRect();

// const centerX = fieldRect.left + (fieldRect.width - ballRect.width) / 2;
// const centerY = fieldRect.top + (fieldRect.height - ballRect.height) / 2;

// ball.style.left = centerX + 'px';
// ball.style.top = centerY + 'px';

//ball.style.left = "0";
//ball.style.top = "0";

 //ball.style.left = fieldRect.width - ballRect.width + "px";
 //ball.style.top = "0";

// ball.style.left = "0";
// ball.style.top = fieldRect.height - ballRect.height + "px";

// ball.style.left = fieldRect.width - ballRect.width + "px";
// ball.style.top = fieldRect.height - ballRect.height + "px";

//Task #15 - keyboard events
// const numberInput = document.getElementById('numberInput');

// numberInput.addEventListener('blur', () => {
//   const inputValue = Number(numberInput.value);
//   if (isNaN(inputValue)) {
//     numberInput.value = 0;
//   }
// });

//Task #16 - keyboard events
// const numberInput = document.getElementById("numberInput");

// numberInput.addEventListener("input", () => {
//   const regex = /^\d*\.?\d*$/; // regulearnoe virajenie dlea cisel  (цtelih i drobnih)
//   const value = numberInput.value;
  
//   if (!regex.test(value)) {
//     numberInput.value = "";
//   }
// });

//Task #20 - working with DOM
// function deleteRow(button) {
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }

// function addUser(event) {
//   event.preventDefault();
//   var name = this.elements["name"].value;
//   var user = this.elements["user"].checked ? "X" : "";
//   var admin = this.elements["admin"].checked ? "X" : "";
  
//   var table = document.getElementById("users-table").getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow();
//   var nameCell = newRow.insertCell();
//   var userCell = newRow.insertCell();
//   var adminCell = newRow.insertCell();
//   var buttonCell = newRow.insertCell();
  
//   nameCell.innerHTML = name;
//   userCell.innerHTML = user;
//   adminCell.innerHTML = admin;
//   buttonCell.innerHTML = '<button onclick="deleteRow(this)">X</button>';
  
//   this.reset();
// }

// document.getElementById("add-user-form").addEventListener("submit", addUser);
