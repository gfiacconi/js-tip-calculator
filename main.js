//USER INPUT FORMS
const billInput = document.querySelector(".bill__input");
const tipsOption = document.querySelectorAll(".tips");
const customTipOption = document.querySelector(".personal__tip")
const peopleInput = document.querySelector(".number__of__people__input");

const tipAmount = document.querySelector(".price__tip__amount");
const totalPriceAmount = document.getElementById("second-tip-amount");

const resetButton = document.querySelector(".reset__btn");
const errorMessage = document.querySelector(".error");


tipsOption.forEach((e) => {
    e.addEventListener('click', () => {
        billCalculator(billInput.value, peopleInput.value, totalPriceAmount)
        tipCalculator(billInput.value, e, peopleInput.value, tipAmount)
    })
})

function billCalculator(bill, numberOfPeople, totalAmount){
    let billResult = parseFloat(bill) / parseFloat(numberOfPeople);
    totalAmount.innerHTML = billResult.toFixed(2);
}


//TIP CALCULATOR 
let tips = [5, 10, 15, 25, 50];

function tipCalculator(bill, tipsOptions, numberOfPeople, tipAmountOutput){
    for(i = 0; i < tips.length; i++){
        if(tipsOptions.classList.contains(`${tips[i]}`)){
            let billResult = (parseFloat(bill) / parseFloat(numberOfPeople)) * `${tips[i]}` / 100;
            tipAmountOutput.innerHTML = '$' + billResult.toFixed(2);
            if(isNaN(billResult) || (billResult) == "Infinity"){
                tipAmount.innerHTML = "$0.00";
                totalPriceAmount.innerHTML = "$0.00";
            }
        }
    }
}


//CUSTOM TIP 
function customTipCalculator(bill, input, numberOfPeople, tipAmountOutput){
    let resultCustomAmount = parseFloat(bill) / parseFloat(numberOfPeople) *  input / 100;
    tipAmountOutput.innerHTML = '$' + resultCustomAmount.toFixed(2);
}


customTipOption.addEventListener('keypress', (e) => {
    if(e.key == "Enter"){
        customTipCalculator(billInput.value, customTipOption.value, peopleInput.value, tipAmount)
        billCalculator(billInput.value, peopleInput.value, totalPriceAmount)
    }
})


// RESET 
function resetBtn(billInput, peopleInput, custom, tips, totalAmount){
    resetButton.addEventListener('click', () =>{
        billInput.value = 0;
        peopleInput.value = 0;
        tipAmount.innerHTML = "$0.00";
        customTipOption.value = 0;
        tipsOption.innerHTML = "$0.00";
        totalPriceAmount.innerHTML = "$0.00";
    })
}
resetBtn(billInput, peopleInput, customTipOption);
