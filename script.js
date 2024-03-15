const convertButton = document.querySelector(".converter-button")

function convertValues() {
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currencyValuetoConvert") // valor a ser convertido 
    const currencyValueConverted = document.querySelector(".currencyValueConverted") // valor convertido
    const dolarToday = 5
    const convertedValue = inputCurrencyValue / dolarToday
    
    currencyValuetoConvert.innerHTML = inputCurrencyValue
    currencyValueConverted.innerHTML = convertValue

    convertButton.addEventListener("click", convertValues)
    console.log(convertedValue)
}