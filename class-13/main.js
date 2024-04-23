//1. Implement a function that displays the URLs of all images (<img>) tags present on a webpage using the document.images property?

function imagesURLs()
{
    var images= document.images;
    var imageurl= [],i;

    for(i=0;i<images.length;i++){
        imageurl.push(images[i].src);
    }

    imageurl.forEach(function(url){
        document.write(url+'<br>');
    });
}
imagesURLs();

var ar1=[23,76,98];
document.write('<br>'+ar1+'<br>');
ar1.push(45);
document.write(ar1);
ar1.forEach(function(value){
    document.write(value+'<br>');
})  //there is no need to add semicolon that's why i am not adding semicolon here.

document.write('<hr>');

var elements= document.body.innerText;
var elements= document.body.innerHTML;
var elements= document.getElementById('content').innerHTML;
var elements= document.getElementById('content').getAttribute('class');
var elements= document.getElementById('content').getAttribute('style');
var elements= document.getElementById('content').attributes;
var elements= document.getElementById('content').attributes[1].value;

console.log(elements);

//2. Write a js function to replace the inner HTML of the <div> element with id content with the string "New Content" using the DOM innerHTML property?

function replaceText(){
    var contents= document.getElementById('contents');
    contents.innerHTML= 'Hello Good Afternoon All!';
}
replaceText();