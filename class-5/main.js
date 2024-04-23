document.write('<h2 align="center">JS Data Types!</h2>');

document.write('<h4> Number Datatype</h4>');

let a= 23;
let b= 2.6;

document.write('value A is : '+a+ '<br>');
document.write('Datatype A is : '+typeof a +'<br>');

document.write('value B is : '+b+ '<br>');
document.write('Datatype B is : '+typeof b+'<br>');

document.write('<h4> String Datatype</h4>');

let str1 = 'Geeta University!';
let str2 = '34';

document.write('value str1 is : '+str1+ '<br>');
document.write('Datatype str1 is : '+typeof str1+'<br>');

document.write('value str2 is : '+str2+ '<br>');
document.write('Datatype str2 is : '+typeof str2+'<br>');

document.write('<h4> Object Datatype</h4>');

let arr1= ['Geeta',34,true,'University'];

document.write('value arr1 is : '+arr1+ '<br>');
document.write('Datatype arr1 is : '+typeof arr1+'<br>');

let obj1= {
    fname: 'Geeta',
    lname: 'University',
}

document.write('value obj1 is : '+obj1+ '<br>');
document.write('Datatype obj1 is : '+typeof obj1+'<br>');

let n1= null;
let n2= undefined;
let n3;

document.write('value N1 is : '+n1+ '<br>');
document.write('Datatype N1 is : '+typeof n+'<br>');

document.write('value N2 is : '+n2+ '<br>');
document.write('Datatype N2 is : '+typeof n2+'<br>');

document.write('value N3 is : '+n3+ '<br>');
document.write('Datatype N3 is : '+typeof n3+'<br>');

//*************************************************************************************************** */

document.write('<h2 align="center">JS Functions!</h2>');

// Basic function Syntax
function msg(){
    document.write('Hello JS functins!<br>')
}
msg();
msg();
msg();
msg();
msg();

document.write('<h4>Functions with parameters and arguments!</h4>');

function fullname(fname,lname){
     document.write(fname+" "+lname);
}
fullname('Geeta','University');

document.write('<hr>');

function sum(a,b){ // it is variable
    let add= a+b;
    document.write('Addition is: '+add+'<br>');
}
sum(34,76); // it is value
sum(100,76);

document.write('<h4>Functions with Return value!</h4>');

function square(n){
    let sq= n*n;
    return sq;
}
let s1 = square(32);
let s2 = square(25);
document.write('Square of s1 is :  '+s1+'<br>');
document.write('Square of s2 is :  '+s2);

document.write('<hr>');


//******************************************************************************************* */

// program take students marks and print total marks and  percentage

function sum_marks(s1,s2,s3,s4,s5){
    let total_marks= s1+s2+s3+s4+s5;
    return total_marks;
}
let tm= sum_marks(80,80,80,80,80);
//let pcg= tm*100/500;
document.write('Total Marks of student is: '+tm+'<br>');
//document.write('Percentage of student is: '+pcg+'%'+'<br>');

function percentage(p){
    let pr= p/500*100;
    return pr;
}
let per=percentage(tm);
document.write('Percentage of student is: '+per+'%'+'<br>');

document.write('<h4>Functions Expressions!</h4>');

let oddeven = function(n) {  // it is anonymous function because function is declared without function name
    let check= (n%2 == 0) ? 'Even Number':'Odd Number';
    return check;
}
let c= oddeven(49);
document.write('Given number is: '+c+'<br>');











