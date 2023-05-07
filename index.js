
function Palindrome(){
    let text = document.getElementById('input').value ;
    console.log(text)
    let Result = document.querySelector('#result');

    if(text == " "/*write the condition here */)
        Result.innerHTML= "It is a Palimdrome" 

    else     
        Result.innerHTML= "It is not a Palimdrome" 
}

// input was it a car or a cat i saw 
// how are you