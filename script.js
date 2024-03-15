const convertButton = document.querySelector(".converter-button")
const selectedCurrency = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    const selectedCurrency = document.querySelector(".currency-select-to-convert").value
    const dolarToday = 5
    const euroToday = 5.46

    console.log(selectedCurrency)

    if (selectedCurrency == "dolar") {
        const convertedValue = inputCurrencyValue / dolarToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    } else if (selectedCurrency == "euro") {
        const convertedValue = inputCurrencyValue / euroToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}//fim função convertValues

function currencyChange () {
    const currencyName = document.getElementById("currency-name") 
    const selectedCurrency = document.querySelector(".currency-select-to-convert").value;
    const currencyImg = document.querySelector(".img-converted") 
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    if (selectedCurrency == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "assets/estados-unidos.png"
    }else if (selectedCurrency == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png"
    }

    convertValues()
}

selectedCurrency.addEventListener("change", currencyChange)
convertButton.addEventListener("click",convertValues)