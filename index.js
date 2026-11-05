let display =  document.getElementById('display');

// Display the value on the screen 

function appendValue(value){
     display.value += value;
}

// Clear display

function clearDisplay(){

    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

   
 function calculate(){
    try{
         if(display.value === ""){
            return;
         }
    

    let result = Function(
        '"use strict"; return (' + display.value + ')'
    )();

    if(!Number.isFinite(result)){
        throw new Error("Invalid calculation");
    }

    display.value = result;

 }catch (error){
 
     display.value = "Error";
 }
 
}
     
 

