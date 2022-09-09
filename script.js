let currencyEl_one = document.getElementById("currency-1");
let currencyEl_two = document.getElementById("currency-2");
let amountEl_one = document.getElementById("amount-1");
let amountEl_two = document.getElementById("amount-2");

let rateEl = document.getElementById("rate");
// let swap = document.getElementById("btn");
let swap = document.getElementsByClassName("btn")[0];

//event listerns

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
    console.log("swap")
});

//functions

function calculate() {
    let currency_one = currencyEl_one.value;
    let currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/4ea381fb6a9b24d707d95ab8/latest/${currency_one}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            let rate = data.conversion_rates[currency_two];
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}
