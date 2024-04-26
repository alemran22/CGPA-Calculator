const input = document.querySelectorAll("button");
const output = document.querySelector("input");
let sum = "";

input.forEach((button) => {
    button.addEventListener("click", function (){
        let inputValue = button.innerText;
        if(inputValue == "AC"){
            sum = "";
            output.value = sum;
        }

        else if (inputValue == "Remove") {
            console.log(sum);
            sum = `${sum}`;
            sum = sum.substring(0, sum.length -1);
            output.value = sum;
            
        }
        else if (inputValue == "="){
            sum = eval(sum);
            output.value = sum.toFixed("2");
        }
        else if (inputValue == "A+") {
            sum = sum + 4; 
            output.value = sum;
        }
            
         else if (inputValue == "A") {
            sum = sum + 3.75;
            output.value = sum;
        }
        else if (inputValue == "A-") {
            sum = sum + 3.5;
            output.value = sum;
        }
            else if (inputValue == "B+") {
            sum = sum + 3.25;
            output.value = sum;
        }
            else if (inputValue == "B") {
            sum = sum + 3;
            output.value = sum;
        }
              else if (inputValue == "B-") {
            sum = sum + 2.75;
            output.value = sum;
        }
            else if (inputValue == "C+") {
            sum = sum + 2.5;
            output.value = sum;
        }
            else if (inputValue == "C") {
            sum = sum + 2.25;
            output.value = sum;
        }
            else if (inputValue == "D") {
            sum = sum + 2;
            output.value = sum;
        }
            else if (inputValue == "F") {
            alert(`You are not promoted.`);
            }
        else{
            sum = sum + inputValue;
            output.value = sum;
        }
    })
})