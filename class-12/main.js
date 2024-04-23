//1. Write a script that alternates the background color of table rows.Use document.getElementByTagName to get all <tr> elements within a table, then manipulate their CSS properties to achieve the alternating colors?

var rows=document.getElementsByTagName('tr');
var i;
for(i=0;i<rows.length;i++){
    if(i%2==0){
        rows[i].className='even';
    }
    else{
        rows[i].className='odd';
    }
}

//2. Build a filter function that hides elements based on a given class name.The function should take the class name as input and hide all elements with that class using document.getElementByclassName?

function hideElements(cname){
    var elements= document.getElementsByClassName(cname);
    var i;
    for(i=0;i<elements.length;i++){
        elements[i].style.display='none';
    }
}
hideElements('hideelements');
function showElements(cname){
    var elements= document.getElementsByClassName(cname);
    var i;
    for(i=0;i<elements.length;i++){
        elements[i].style.display='block';
    }
}
showElements('hideelements');

//3. Write a javascript function that counts the total number of links (<a> tags ) in a webpage using the document.links property?

function countlinks(){
    var links= document.links;
    var tlinks= links.length;
    document.write('<br>Total links is: '+tlinks);
}
countlinks();

//4. Create a script that retrieves and displays the title of the current webpage using the document.title property?

document.write('<hr>');
document.write(`<h2>4. Create a script that retrieves and displays the title of the current webpage using the document.title property?</h2>`);

var pagetitle= document.title;
document.write("My current pagetitle name is: "+pagetitle);

//5. Develop a javascript program that changes the background color of the <body> element of a webpage using the document.body property?

function bodycolor(){
    var body= document.body;
    body.style.backgroundColor='aqua';
    body.style.color='red';
}
//bodycolor();
