/*This code is based on a training code by www.itnetwork.cz.
  The original code can only adds two numbers together. 
  Without no choice of operation. I added select with options of operation.*/  

window.onload =  function(){
let operation = document.getElementById("operation"); 
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");

    button.onclick =  function() {
        let index = operation.selectedIndex;
        let n1 = parseInt(number1.value);
        let n2 = parseInt(number2.value); 

            if((Number.isNaN(n1)))
                alert("There is no first number!")

            if((Number.isNaN(n2)))
                alert("There is no second number!")

            if(index == 0)         
                alert("The result of the addition is " + (n1 + n2) + "!" );
            else if (index == 1)
                alert("The result of the substraction is " + (n1 - n2) + "!");
            else if (index == 2)
                alert("The result of the division is " + (n1 / n2) + "!");
            else 
                alert("The result of the multiplication is " + (n1 * n2) + "!");
        
    } ;
} 
