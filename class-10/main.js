document.write('<h1>Multidimensional Array</h1><br>');

var ar1=[
    ['Prince',1010,'B.Tech',21],
    ['Raj',1011,'BCA',21],
    ['Ashutosh',1012,'M.Tech',20],
    ['Jatin',1013,'MBA',19],
    ['Sagar',1014,'MCA',19]
];
document.write(ar1+'<br>');
document.write(ar1[3]+'<br>');
document.write(ar1[2]+'<br>');
document.write(ar1[2][2]+'<br>');

document.write('<hr>')
var i;
for(i=0;i<ar1.length;i++){
    document.write(ar1[i]+'<br>');
}

document.write('<hr>')
var i,j;
for(i=0;i<ar1.length;i++){
    for(j=0;j<ar1[i].length;j++){
       // document.write(ar1[i][j]+" "+'<br>');
        document.write(ar1[i][j]+" ");
    }
    document.write('<br>');
}

document.write('<hr>')
var i,j;
document.write('<table border="1" width="80%" align="center" cellpadding="10">');
document.write(`
    <tr>
    <th>Name</th>
    <th>Roll</th>
    <th>Course</th>
    <th>Age</th>
    </tr>
`)

for(i=0;i<ar1.length;i++){
    document.write('<tr>');
    for(j=0;j<ar1[i].length;j++){
       // document.write(ar1[i][j]+" "+'<br>');
        document.write('<td>'+ar1[i][j]+'</td>');
    }
    document.write('</tr>');

}
document.write('</table>');
document.write('<hr>')

document.write('<br><h3>Q.1.Write a program in js to script for print employee details(name,designation,sallary and contact) with tabulat format?</h3><br>');

var ar2=[
    ['Prince','Bihar',1000000000,6578412587],
    ['Raj','UttarPradesh',900000000,8745126547],
    ['Ashutosh','MadhyaPradesh',80000000,8963587415],
    ['Jatin','Panipat',700000000,8745148965],
    ['Sagar','Delhi',600000000,9748563214]
];

var i,j;
document.write('<table border="1" width="80%" align="center" cellpadding="10">');
document.write(`
    <tr>
    <th>Name</th>
    <th>designation</th>
    <th>Sallary</th>
    <th>Contact</th>
    </tr>
`)

for(i=0;i<ar2.length;i++){
    document.write('<tr>');
    for(j=0;j<ar2[i].length;j++){
       // document.write(ar1[i][j]+" "+'<br>');
        document.write('<td>'+ar2[i][j]+'</td>');
    }
    document.write('</tr>');

}
document.write('</table>');

document.write('<hr>');

document.write('<h2>JAVASCRIPT DOM</h2>');

var elements;
elements= document.getElementById('heading1');
elements= document.getElementsByClassName('heading2');
elements= document.getElementsByTagName('h3');
console.log(elements);

document.write('<hr>');

document.write('<h3>Q.2.Write a function that takes an HTML elements ID as input and returns the count of all child elements within that element. You can use document.getElementByid to retrieve the parent element?</h3>');

function countChildElements(idName){
    var parentElement= document.getElementById(idName);
    if(parentElement){
        return parentElement.childElementCount;  //it is inbuilt function for more information goto google and search javascipt childElementCount.
    }
    else{
        return 0;
    }
}
var counts=countChildElements('demo');
document.write(`Total Elements= ${counts}<br>`);

document.write('<hr>');

document.write('<h3>Q.3.Create a function that accepts a class name and a CSS property-value pair as arguments. This function should locate all elements with the specified class name using document getElementByClassName and apply the given CSS style to each of them?</h3>');

function changeStyle(className,property,value){
    var ele= document.getElementsByClassName(className);
    var i;
    for(i=0;i<ele.length;i++){
        ele[i].style[property]=value;
    }
}
changeStyle('test','color','red');
changeStyle('test','background','lightgreen');
changeStyle('test','text-align','center');

document.write('see result above in lorem ipsum');









