document.write('<h2>Immediate Invoked Function Expression(IIFE)</h2>');
// ()()

(function msg(){
    document.write('<br>Good morning Everyone!');
})();

document.write('<hr>');

(function sum(a,b){
    let add = a+b;
    document.write('sum= '+add+'<br>');
})(50,50);

document.write('<hr>');

((n)=>{
    let sq= n*n;
    document.write('square= '+sq+'<br>');
    
})(5);

document.write('<h2>Template String</h2>');

function calculate(a,b){
    let sum= a+b;
    let sub= a-b;
    let div= a/b;
    document.write('sum= '+sum+'<br>'+'substract= '+sub+'<br>'+'division= '+div+'<br>');

    document.write('<hr>');

    document.write(`sum= ${sum} <br>  substract=  ${sub} <br> division= ${div} <br>`); //we have to add (`)this for print output this is present under esc button

}
calculate(10,2);

document.write('<h2>JavaScript Object</h2>');

let obj1= {
    name: 'Prince',
    Roll: 1010,
    Branch: 'CSE',
    details:function(){
        return 'Name is:' +this.name+ '<br>'+ 'Roll is: ' + this.Roll +'<br>'+ 'Branch is: '+this.Branch+'<br>';       
   },
    stu_data:function(){
        return 'Hello Programmar!';
    },
    arr1:['B.TECH' ,'MBA' ,'BBA' ,'M.TECH'],
    obj2:{
        course1: 'B.TECH',
        course2: 'M.TECH',
        course3: 'MBA',
    },
    
}
let name1=obj1.name;
document.write(`name is: ${name1} <br>`);
document.write(`Roll is: ${obj1.Roll} <br>`);
document.write(`Branch is: ${obj1.Branch} <br>`);
document.write(`Through Function: ${obj1.stu_data()} <br>`);
document.write(`Through Array_Course is: ${obj1.arr1} <br>`);
document.write(`Through object inside object2_Course is: ${obj1.obj2.course2} <br>`);
document.write('Through object inside function is_Course is:<br> ' +obj1.details()+'<br>');

document.write('<hr><hr>');


//create an object representing a user profile with properties for their username,email,and 
//date of registration.Write a function to display the user's profile information?

let obj= {
    name: 'Prince Raj',
    Email: 'prince123@gmail.com',
    date: '03-03-2024',
    information:function(){
        return 'Name is:' +this.name+ '<br>'+ 'Email is: ' + this.Email +'<br>'+ 'Date of registration is: '+this.date+'<br>';       
   },
}
document.write('Information is: <br> ' +obj.information()+'<br>');

// function data(){

// }

document.write('<hr><hr>');

//create an object representing a car with properties for its make, model, and year. 
//Write a function to display the full details of the car?

let obj_car= {
    model: 'BMW C6300',
    year:2001,
}




