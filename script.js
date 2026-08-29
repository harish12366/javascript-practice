//even or odd
// const check = (num) => {
//     if(num%2==0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// console.log(check(0));


// //result evaluator - pass or fail 
// const evaluateResult = (mark) =>{
//     if(mark>=50 && mark<=100){
//         return "pass";
//     }
//     else if(mark<50 && mark>=0){
//         return "fail";
//     }
//     else{
//         console.log("invalid marks");
//         return null;
//     }
   
// }
     
// evaluateResult(156);

//maximum finder - largest of three numbers 
// const findMax = (num1,num2,num3) => {
//     if(num1>=num2 && num1>=num3){
//         return num1;
//     }
//     else if(num2>num1 && num2>=num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }
// console.log(findMax(9,9,2));

//Accumulator — Sum from 1 to N

// const sumToN = (n) =>{
//     let sum = 0;
//     let i =1;
//     while(i<=n){
//         sum+=i;
//         i++;
//     }
//     return sum;
// }
// console.log(sumToN(10));

//Multiplication Table Generator

// const printTable = (n) =>{
//     for(let i=1;i<=10;i++){
//         console.log(n+"*"+i+"=",n*i);
//     }
// }
// printTable(3);

//Digit Counter — Number Length Finder

// const countDigits = (n) => {
//     let count=0;
//     if(n==0){
//         count+=1;
//     }
//     while(n>0){
//         n = Math.floor(n/10);
//         count+=1;
//     }
//     return count;
// }
// console.log(countDigits(12345544333));

//Number Reverser

// const reverseNumber = (n) =>{
//     let ld=0;
//     let rev=0;
//     while(n>0){
//         ld = n%10;
//         rev = rev*10+ld;
//         n=Math.floor(n/10);
//     }
//     return rev;
// }
// console.log(reverseNumber(747484));


// Factorial Engine

// const factorial = (n) =>{
//     let fact = 1;
//     while(n>0){
//         fact*=n;
//         n--;
//     }
//     return fact;
// }
// console.log(factorial(5));

// Prime Validator

// const isPrime = (n) =>{
//     let flag = true;
//     if(n<2){
//         return "not prime";
//     }
//     for(let i = 2;i<n;i++){
//         if(n%i==0){
//             flag=false;
//             break;

//         }
//     }
//     return flag;
// }
// console.log(isPrime(19));


// Pattern Builder — Star Triangle

// const printPattern = (n) => {
//     for(let i=1;i<=n;i++){
//        let row="";
//        for(let j=1;j<=i;j++){
//         row+="*";
//        }
//        console.log(row);
        
//     }
// }
// printPattern(10);
