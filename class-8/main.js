// document.write('<h2>JAVASCRIPT EVENTS</h2>');

function msg(){
    alert('Hello everyone!');
}

// function changeTheme1(){
//     document.body.style.background='skyblue';
// }
function changeTheme2(){
    document.getElementById('input').style.background='red';
}
// function changeTheme3(){
//     document.body.style.background='green';
// }

document.write('<hr><hr>');

//1. Check number is positive,negative or zero
function check(num){
    if(num>0){
        document.write('Given number is Positive! <br>')
    }
    else if(num<0){
        document.write('Given number is Negative! <br>')
    }
    else
        document.write('Given number is Zero!<br>')
}
check(5);
check(-5);
check(0);

document.write('<hr><hr>');

//2. Input (1 to 7) number and print week name like 1 for monday and so on
function checkWeek(day){
    if(day>=1 && day<=5)
    document.write('WeekDay!<br>');
    else if(day>=6 && day<=7)
    document.write('Weekend!<br>');
    else
    document.write('Invalid Day!<br>');
}
checkWeek(2);
checkWeek(6);
checkWeek(0);

document.write('<hr><hr>');


// 3. write a js function that takes 3 number input and return largest number by nested if else.
function largest(n1,n2,n3){
    if(n1>n2){
        if(n1>n3){
            document.write(n1+' is greater number');
        }
        else{
            document.write(n3+' is greter number');
        }
    }
    else{
        if(n2>n3){
            document.write(n2+' is greater number');
        }
        else{
            document.write(n3+' is greater number');
        }
    }
}
largest(5,10,20);





