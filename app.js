var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#check-btn");
var message = document.querySelector("#error-msg");

btnCheck.addEventListener("click", function validateAmount(){
    hideMessage();
    if(billAmt.value > 0){
        if(cashGiven.value >= billAmt.value){
            returnAmt = cashGiven.value-billAmt.value;
            changecalculator(returnAmt);

        }else{
            showMessage(
                "The cash provided must be equal to or more than bill amount"
            );
        }
    }else{
        showMessage("Invalid Bil Amount");
    }
});

function hideMessage(){
    message.style.display="none";}


function showMessage(msg){
    message.style.display ="block";
    message.innerText =  msg;
}