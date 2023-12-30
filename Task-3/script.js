let display=document.getElementById("display");
let buttons= document.querySelectorAll('button'); 

let result="";

let buttonsArray =Array.from(buttons);


buttonsArray.forEach(button => {
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == "=") {
            result= eval(result);
            display.value = result;
            console.log(result);
        }
        else if(e.target.innerHTML == "AC"){
            result="";
            display.value =result;
            console.log(result);
        }
        else if(e.target.innerHTML == "Del"){
            result= result.substring(0, result.length-1);
            display.value =result;
            console.log(result);
        }
        else{
            result+= e.target.innerHTML;
            display.value = result
            console.log(result);
        }
    })
});