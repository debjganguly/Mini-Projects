
var submit = document.getElementById("submit");
var output = document.getElementById("output");

submit.onclick = function() {
    var amount = document.getElementById("amount");
    var tip = document.getElementById("tip");
    var tipamount = parseFloat(amount.value) *parseFloat(tip.value) / 100;
    output.innerText = "Tip Amount: ₹" + tipamount.toFixed(2);
}