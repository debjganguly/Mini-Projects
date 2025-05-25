let submit = document.getElementById("submit");
let result = document.getElementById("resultText");

// Display result
submit.onclick = function() {
    let tippercent = document.getElementById("tipPercentage").value; 
    let bill = document.getElementById("billAmount").value;

    tippercent = parseFloat(tippercent);
    bill = parseFloat(bill);

    let amount = (1+(tippercent/100)) * bill;
    result.textContent = "$" + amount;
}