var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#check-btn");
var message = document.querySelector("#error-msg");

var noOfNotes = document.querySelectorAll(".no-of-notes");

notesAvail = [2000,500,100,20,10,5,1];


btnCheck.addEventListener("click", function validateAmount(){
    hideMessage();
    if(billAmt.value > 0 && cashGiven.value > 0){
        

        if (billAmt.value > cashGiven.value)
        {
            showMessage("Do You Wanna go to WASH Dishes?");

        }

        if(cashGiven.value > billAmt.value)
        {
            var returnAmt = cashGiven.value - billAmt.value;
            if (returnAmt > 0)
            {
                changeCalculator(returnAmt);
            }        
        }

        if (cashGiven.value === billAmt.value)
        {
            var returnAmt = cashGiven.value - billAmt.value;
            if (returnAmt > 0)
            {
                changeCalculator(returnAmt);
            }        
            

        }  
        
        

        
        
    }else{
        showMessage("Invalid Bill Amount");
    }
});



function changeCalculator(returnAmt){
    
    for(var i=0;i<notesAvail.length; ++i){
        var notes = Math.trunc(returnAmt/notesAvail[i]);
        
        returnAmt %= notesAvail[i];
        noOfNotes[i].innerText = notes;
    } 
    
}
function hideMessage(){
    message.style.display="none";}


function showMessage(msg){
    message.style.display ="block";
    message.innerText =  msg;
}