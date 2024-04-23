// JavaScript GET and SET Methods

var elements;
elements= document.getElementById('header').innerText; // it show inner text
elements= document.getElementById('header').innerHTML;   //it show html code
elements= document.getElementById('header').getAttribute('id');   
elements= document.getElementById('header').getAttribute('style');   // it show any attributes which mention in code by you
elements= document.getElementById('header').attributes;
elements= document.getElementById('header').getAttribute[2];//when we have to use multiple attributes   
elements= document.getElementById('header').getAttribute[2].value;   

console.log(elements);

//Create a js application that,upon hitting a button,toggles the text between "Hide" and "show" hidding or presenting content as applicable.This is done by using the innerText property?

function toggleButton(idname){
    var button= document.getElementById(idname);
    var con= document.getElementsByClassName('contents');
    var text= button.innerText;

    var i;
    for(i=0;i<con.length;i++){
        if(text=='Hide'){
            con[i].style.display='none';
            button.innerHTML= 'Show';
        }
        else{
            con[i].style.display='block';
            button.innerHTML= 'Hide';
        }
    }   
}

// Create a js application that upon hitting a button toggles the text between "Dark" and "Blue" changing background and text color or prsenting body change dark and blue and text color 'white'?