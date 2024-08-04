var cards = document.querySelectorAll(".card")
var div = document.querySelector("#div1")
var showTotalPriceBtn = document.querySelector("#showTotalPrice")
var totalPriceDisplay = document.querySelector("#totalPriceDisplay")
var Test = document.querySelector("#test")
var totalPrice = 0 

cards.forEach(function(item) {
    var button = item.querySelector("button")
     button.addEventListener("click", function() {
        var productTitle = item.querySelector("h2").textContent
        div.innerHTML += `<p>${productTitle}</p>`
        totalPrice += +(item.querySelector("p").getAttribute("data-price"))
    }) 
})

showTotalPriceBtn.addEventListener("click", function() {
    // div.innerHTML = totalPrice
    
    console.log(totalPrice)
   
    totalPriceDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
})

