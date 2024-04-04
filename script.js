const input = document.querySelectorAll("button");
const output = document.querySelector("input");
let sum = ""

input.forEach((button) => {
    button.addEventListener("click", function (){
        let inputValue = button.innerText;
        if(inputValue == "AC"){
            sum = "";
            output.value = sum;
        }
        else if (inputValue == "Remove"){
            sum = sum.substring(0, sum.length -1);
            output.value = sum;
        }
        else if (inputValue == "="){
            sum = eval(sum);
            output.value = sum.toFixed("2");
        }
        else{
            sum = sum + inputValue;
            output.value = sum;
        }
    })
})