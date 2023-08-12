console.log("check");
let string = '';
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
      
        if (e.target.innerHTML == '=') {
             
            string = eval(string);
            input.value = string
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string
        }
        else if(e.target.innerHTML=='sin'){
            input.value =  Math.sin(string);
        }
        else if(e.target.innerHTML=='cos'){
            input.value =  Math.cos(string);
        }
        else if(e.target.innerHTML=='lg'){
            input.value =  Math.log10(string);
        }
        else {
            
            string += e.target.innerHTML;
            input.value = string
        }


    })
});;
