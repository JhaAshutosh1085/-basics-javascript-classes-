// Immediate Invoked Function Expression (IIFE) FUNCTION :-

// Arrow Function:-

document.write('<h2 align="center">Arrow Function</h2>'); // FACTORIAL PRINT

let factorial2nd = (n) => (n===1 || n===0)? 1:n*factorial2nd(n-1); //when you have single statement then you have to write like this 

let f2nd= factorial2nd(5);
document.write('Factorial is: '+f2nd);

document.write('<hr>'); // FACTORIAL PRINT 

let factorial = (n) =>{  // In Arrow Function we take arrow operator
    let fact = (n==1 || n==0)? 1:n*factorial(n-1); // you have to also use ===(three times equal)
    return fact;
}
let f = factorial(10);
document.write('Factorial is: '+f);

document.write('<hr>'); // ODD EVEN CHECK

let oddeven = n => (n%2===0)? 'Even Number': 'Odd Number';

let check = oddeven(101);
document.write('value is: '+check);

