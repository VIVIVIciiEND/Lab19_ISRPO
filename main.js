// let summ = 0;
// for (let i = 0; i<5 ; i++){
//     if (i%2==0){
//         console.log(i);
//         summ+= i;
//     }
// }
// console.log(summ);

// let count = 0;
// while (count < 3 ){
//     console.log("Count: " , count);
//     count++;
// }

// //----
// let number = 5 ;
// while (number > 0){
//     console.log(number)
//     number -=1;
// }

// let doValue = 0;
// do{
//     console.log("Value" , doValue);
//     doValue++;
// }while(doValue<3);

// for (let i = 0 ; i< 10 ; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

// for (let i =0 ; i<10 ; i++){
//     if ( i !== 5){
//         if(i===9){
//             break;
//         }
//         console.log(i);
//     }
// }

// for ( let i = 1 ; i<= 3 ; i++ ){
//     for (let j = 1 ; j<= 3 ; j++){
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

// function sum( a , b ){
//     return a+b;
// }
// console.log(sum(3,5));

// function multiply(a , b){
//     return a*b;
// }
// console.log(multipl(3,5));

// function sayHello(name){
//     console.log(`Hello , ${name}`);

// }
// sayHello("Тимофей"); 


// function printInfo(name , age){
//     console.log(`Name : ${name} Age : ${age}`);

// }
// printInfo("Динара" , 18);

// function calculateDiscount(price , sk = 10){
//     return price - sk;
// }
// calculateDiscount(100 , 20);
// calculateDiscount(300);

// let numbersArr = [1,2,3,4,5];
// console.log(numbersArr); 
// console.log(numbersArr[0]);
// console.log(numbersArr[1]);

// let color = ["red" , "green" , "pink"];
// console.log(color[0] , color[-1]);
// color[1]="black";
// console.log(color);

// let students = [];
// students.push("динара");
// students.push("диана");
// students.push("луна");
// console.log(students);
// students.pop(students[-1]);
// console.log(students);

// let numbers2 = [10 , 20 , 30];
// for (let i = 0 ; i<numbers2.length ; i++){
//     console.log(numbers2[i]);
// }

// for (let value of numbers2){
//     console.log(value);
// }

// let mixedArray = [1 , "text" , true , 3.14];
// console.log(mixedArray);

// console.log(numbersArr.includes(1));
// console.log(numbersArr.indexOf(2));

let cities = ["волжский", "москва"  , "волгоград"];
if (cities.includes("волжский")){
    console.log(cities.indexOf("волжский"))
}else{
    console.log("нет такого города")
}
