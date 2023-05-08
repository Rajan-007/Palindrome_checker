
function Palindrome(){
    let text = document.getElementById('input').value ;
    console.log(text)
    let Result = document.querySelector('#result');

    console.log(text.split("").reverse().join(""))
    if(text === text.split("").reverse().join(""))
        Result.innerHTML= "It is a Palindrome" 

    else     
        Result.innerHTML= "It is not a Palindrome" 
}

// input was it a car or a cat i saw 
// how are you