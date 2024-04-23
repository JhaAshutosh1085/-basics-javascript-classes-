document.write('<h2>write a javascipt function that takes a student score as input and returns their grade based on the following grading scale:(switch case)</h2>')

function checkscore(score){
    var grade;
    switch(true){
       case score>=90 && score<=100:
        grade='A';
        break;

        case score>=80 && score<=89:
        grade='B';
        break;

        case score>=70 && score<=79:
        grade='C';
        break;

        case score>=60 && score<=69:
        grade='D';
        break;

        case score>=50 && score<=59:
        grade='E';
        break;

        case score<40:
        grade='FAIL!';
        break;

        default :
        grade='Invalid!';
        break;
    }
    return grade;
}
document.write(`Grade is: ${checkscore(67)}<br>`);
document.write(`Grade is: ${checkscore(87)}<br>`);
document.write(`Grade is: ${checkscore(98)}<br>`);
document.write(`Grade is: ${checkscore(54)}<br>`);
document.write(`Grade is: ${checkscore(107)}<br>`);
// res=checkscore(90);
// res=checkscore(80);
// document.write('Grade is: '+res+'<br>');
// document.write('Grade is: '+res+'<br>');

document.write('<hr><hr>');

document.write('<h2>write a javascipt function that takes a numner representing the day of the week (1 for monday, 2 for Tuesday, etc.)and returns the name of the day.(switch case)</h2>')

// function checkweek(num){
//     var day;
//     switch(num){
//             case 1:
//             day='Monday';
//             break;

//             case 2:
//             day='Tuesday';
//             break;

//             case 3:
//             day='Wednesday';
//             break;

//             case 4:
//             day='Thursday';
//             break;

//             case 5:
//             day='Friday';
//             break;

//             case 6:
//             day='Saturday';
//             break;

//             case 7:
//             day='Sunday';
//             break;

//             default :
//             day='Invalid number!';
//             //break;
//         }
//         return day;
// }
// document.write(`Day is: ${checkweek(2)}<br>`);
// document.write(`Day is: ${checkweek(1)}<br>`);
// document.write(`It is: ${checkweek(9)} Please Choose Valid Number<br>`);

// 2nd Method:-
function checkweek(num){
    var day;
    switch(true){
            case num== 1:
            day='Monday';
            break;

            case num== 2:
            day='Tuesday';
            break;

            case num== 3:
            day='Wednesday';
            break;

            case num== 4:
            day='Thursday';
            break;

            case num== 5:
            day='Friday';
            break;

            case num== 6:
            day='Saturday';
            break;

            case num== 7:
            day='Sunday';
            break;

            default :
            day='Invalid number!';
            break;
        }
        return day;
}
document.write(`Day is: ${checkweek(2)}<br>`);
document.write(`Day is: ${checkweek(1)}<br>`);
document.write(`It is: ${checkweek(9)} Please Choose Valid Number<br>`);

document.write('<hr><hr>');

document.write('<h2>write a javascipt function that takes a numner representing the month  (1 for january, 2 for february, etc.)and returns the name of the month.(switch case)</h2>')

function checkmonth(num){
    var month;
    switch(num){
            case 1:
            month='January!';
            break;

            case 2:
            month='February!';
            break;

            case 3:
            month='March!';
            break;

            case 4:
            month='April!';
            break;

            case 5:
            month='May!';
            break;

            case 6:
            month='June!';
            break;

            case 7:
            month='July!';
            break;

            case 8:
            month='August!';
            break;

            case 9:
            month='September!';
            break;

            case 10:
            month='October!';
            break;

            case 11:
            month='November!';
            break;

            case 12:
            month='December!';
            break;

            default :
            month='Invalid number!';
            break;
        }
        return month;
}
document.write(`Month is: ${checkmonth(1)}<br>`);
document.write(`Month is: ${checkmonth(2)}<br>`);
document.write(`Month is: ${checkmonth(3)}<br>`);
document.write(`Month is: ${checkmonth(4)}<br>`);
document.write(`Month is: ${checkmonth(5)}<br>`);
document.write(`Month is: ${checkmonth(12)}<br>`);
document.write(`It is: ${checkmonth(15)} Please Choose Valid Number<br>`);

document.write('<hr><hr>');

document.write('<h2>Java Script Basic Array</h2>');

var arr1= ['Prince','Raj','Anay','Ashish','Sagar','Jatin'];

document.write(arr1+'<br>'); // it printed all elements present in array
document.write(arr1[0]+'<br>'); // it printed 0th position elements present in array
document.write(arr1[1]+'<br>');

var i;
for(i=0;i<6;i++){
    document.write(arr1[i]+"#");
}

var j;
document.write('<ul type=square>');

for(j=0;j<6;j++){
    document.write('<li>'+arr1[j]+'</li>');
}
document.write('</ul>');

document.write('<hr><hr>');

document.write('<h2>write a javasript array that adding a number present in array:(using for loop)</h2>')


var a= [10,20,30,40,50];
document.write('Number is:'+a+'<br>');

var k,sum=0;

for(k=0;k<a.length;k++){
    sum=sum+a[k];
    }
    // document.write('sum of this number is:'+sum);
    document.write(`Sum of this number is: ${sum}`);















