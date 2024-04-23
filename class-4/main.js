//  we have to link js file in body elemnets for code execution
document.write('Hello java programmer!'); // it is optional for add semicolon

document.write('<h1 align="center">Javascript Output</h1>');

//document.write()
//window.alert()
//console.log()
//innerHTML()

//window.alert('Hello Alert! This is window.alert');

document.getElementById('text').innerHTML='Hello Geeta University. This is innerHTML'; // used for innerHTML first we have to define id in html file

console.log('Hello students This is a console.log'); // it is used for checking error or debugging
// console is a compiler of javascript 

document.write('<h2 align="center">Javascript Variables</h2>');
// var, let and const-- these three keyword used for declaration of variables.

document.write('<h3 align="center">Javascript Variables with (VAR) keywords</h3>');
var a =35;
var name1='Geeta University';
var d=3.5;
var a=79;
    a=200; // we can also reassign with (var)keyword
    
document.write('value of A is : '+a + '<br> value of name is :-'+name1+'<br> value of d is:-'+d);// concatenate when two string adding i.e (+)
document.write('<br> value of A is:-'+a); // we can redeclared with (var)keyword
if(a==200) // (var) is a global scope element or, globally used means we can access value outside if block
    {
        var f=307;
        document.write('<br>value of f is inside if block is:-'+f+'<br>');
    }
    document.write('value of f is outside if block is:-'+f);

// *****************************************************

document.write('<h3 align="center">Javascript Variables with (LET) keywords</h3>');
let b=78;
//let b=90; // we cant redeclared with (let)keyword it is not supported
    b= 48; // But we can reassign value with (let)keyword
document.write('Value of b is:-'+b);
if(b==48) // (Let)keyword is a block scope element means we cant access value outside if block
    {
        let e=400;
        document.write('<br>value of e is inside if block is:-'+e+'<br>');
    }
    //document.write('value of e is outside if block is:-'+e+'<br>');

//******************************************************* 

document.write('<h3 align="center">Javascript Variables with (CONST) keywords</h3>');
const c=45;
//const c=67; // we cant redeclared with (const)keyword it is not supported
     // c=46; // Also we cant reassign value with (const)keyword it is not supported

document.write('value of c is:-'+c);
if(c==45) // (const) is also a block scope element or, local scope means we cant access value outside if block
    {
        let x=67;
        document.write('<br>value of x is inside if block is:-'+x+'<br>');
    }
   // document.write('value of x is outside if block is:-'+x);

//    let a1,b1,c1; // we can also write like this as like c programming
//    a1=65;
//    b1=75;
//    c1=a1+b1;


