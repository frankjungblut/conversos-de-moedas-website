const convertButton = document.querySelector(".converter-button")
const selectedCurrency = document.querySelector(".currency-select-to-convert")
const CurrentCurrency = document.querySelector(".currency-select-current")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    const dolarToday = 5
    const euroToday = 5.46
    const libraToday = 6.36
    const bitcoinToday = 340544.45
    const realToday = 0.20

    console.log(selectedCurrency)

    //moeda local
    if (CurrentCurrency.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    //moeda convertida
    if (!(CurrentCurrency.value == selectedCurrency.value)) {
        if (selectedCurrency.value == "dolar") {
            const convertedValue = inputCurrencyValue / dolarToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "euro") {
            const convertedValue = inputCurrencyValue / euroToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "libra") {
            const convertedValue = inputCurrencyValue / libraToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "bitcoin") {
            const convertedValue = inputCurrencyValue / bitcoinToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "BTC"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "real") {
            const convertedValue = inputCurrencyValue / realToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedValue)
        }
    }
    //par igual de moeda
    if (CurrentCurrency.value == selectedCurrency.value) {
        if (selectedCurrency.value == "dolar") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "euro") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "libra") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "bitcoin") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "BTC"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "real") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedValue)
        }
    }

}//fim função convertValues
function currencyChange() {
    const currencyName = document.getElementById("currency-name")
    const currentName = document.getElementById("current-name")
    const selectedCurrency = document.querySelector(".currency-select-to-convert").value;
    const currentCurrency = document.querySelector(".currency-select-current").value;
    const currencyImg = document.querySelector(".img-converted")
    const currentImg = document.querySelector(".img-current")

    //moeda para converter
    if (currentCurrency == "dolar") {
        currentName.innerHTML = "Dólar americano"
        currentImg.src = "assets/estados-unidos.png"
    } else if (currentCurrency == "euro") {
        currentName.innerHTML = "Euro"
        currentImg.src = "assets/euro.png"
    } else if (currentCurrency == "libra") {
        currentName.innerHTML = "Libra"
        currentImg.src = "assets/libra.png"
    } else if (currentCurrency == "bitcoin") {
        currentName.innerHTML = "Bitcoin"
        currentImg.src = "assets/bitcoin.png"
    } else if (currentCurrency == "real") {
        currentName.innerHTML = "Real"
        currentImg.src = "assets/brasil.png"
    }

    //moeda convertida
    if (selectedCurrency == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "assets/estados-unidos.png"
    } else if (selectedCurrency == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png"
    } else if (selectedCurrency == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/libra.png"
    } else if (selectedCurrency == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "assets/bitcoin.png"
    } else if (selectedCurrency == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "assets/brasil.png"
    }

    convertValues()
}

CurrentCurrency.addEventListener("change", currencyChange)
selectedCurrency.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)