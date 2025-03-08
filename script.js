let displayInput=document.getElementById("calculationInput");
let previousValue;
function appendValue(value)
{
    
        displayInput.value+=value;
        
   
}
function clearDisplay()
{
    try{
        previousValue=eval(displayInput.value);
    
    document.getElementById("presult").textContent = previousValue;
    displayInput.value="";
    }
   catch{
    displayInput.value="";
   }
}
function clearElement(){
    displayInput.value=displayInput.value.slice(0,-1);
}
function calculate()
{
    try{
        let a=eval(displayInput.value);
        
        displayInput.value=a;
        
       
    }catch{
        document.getElementById("result").innerText = "Error..";
    }
}
