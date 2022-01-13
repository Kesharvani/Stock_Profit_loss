var initialPriceSelector=document.querySelector("#initialprice");
var quantitySelector=document.querySelector("#quanityid");
var currentPriceSelector=document.querySelector("#currentprice");

var profitLossButtonSelector=document.querySelector("#profitlossbtn");

var outputDivSelector=document.querySelector("#outputdiv");


profitLossButtonSelector.addEventListener("click", function submitHandler()
{
    if(initialPriceSelector==="" || initialPriceSelector.value<=0 || quantitySelector.value<=0 ||quantitySelector==="" || currentPriceSelector.value<=0 || currentPriceSelector==="")
    {
        outputDivSelector.innerText="Please Enter currect value! Field value should not be negative, blank or Zero";
    }
    else{

    calculateProfitAndLoss(Number(currentPriceSelector.value),Number(initialPriceSelector.value), Number(quantitySelector.value));
    }
});

function calculateProfitAndLoss(currentPriceSelector, initialPriceSelector, quantitySelector)
{
    var buyingPrice=initialPriceSelector*quantitySelector;
    var sellingPrice=currentPriceSelector*quantitySelector;
    if(currentPriceSelector > initialPriceSelector)
    {

        outputDivSelector.innerText="Profit Percentage is: " + ((sellingPrice-buyingPrice)*100)/buyingPrice +"%" + " Total profit is: "+(sellingPrice-buyingPrice);
    }
    else{

        

         outputDivSelector.innerText=
         "Loss Percentage is: "+ ((buyingPrice-sellingPrice) * 100)/buyingPrice +"%" + " Total loss is: " + (buyingPrice-sellingPrice);
    }
}