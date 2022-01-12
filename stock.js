var initialPriceSelector=document.querySelector("#initialprice");
var quantitySelector=document.querySelector("#quanityid");
var currentPriceSelector=document.querySelector("#currentprice");

var profitLossButtonSelector=document.querySelector("#profitlossbtn");

var outputDivSelector=document.querySelector("#outputdiv");


profitLossButtonSelector.addEventListener("click", function submitHandler()
{

    calculateProfitAndLoss(Number(currentPriceSelector.value),Number(initialPriceSelector.value), Number(quantitySelector.value));
});

function calculateProfitAndLoss(currentPriceSelector, initialPriceSelector, quantitySelector)
{
    if(currentPriceSelector > initialPriceSelector)
    {
        var buyingPrice=initialPriceSelector*quantitySelector;
        var sellingPrice=currentPriceSelector*quantitySelector;

        outputDivSelector.innerText="Profit Percentage is: " + ((sellingPrice-buyingPrice)*100)/buyingPrice +"%";
    }
    else{
        
         outputDivSelector.innerText="Loss Percentage is: " + ((buyingPrice-sellingPrice)*100)/buyingPrice +"%";
    }
}