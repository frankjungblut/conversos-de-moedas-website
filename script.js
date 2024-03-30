const convertButton = document.querySelector(".converter-button")
const CurrentCurrency = document.querySelector(".currency-select-current") //moeda local
const selectedCurrency = document.querySelector(".currency-select-to-convert") // moeda estrangeira

async function getQuote() {
    const data = await fetch(`https://economia.awesomeapi.com.br/json/last/${selectedCurrency.value}-${CurrentCurrency.value}`).then(response => response.json())
    console.log(`${selectedCurrency.value}-${CurrentCurrency.value}`)
    return data
}


async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado pelo usuario
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    
    const quoteData = await getQuote()
    const price = (quoteData[`${selectedCurrency.value}${CurrentCurrency.value}`].bid)


    //moeda local
    if (CurrentCurrency.value == "USD") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "EUR") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "GBP") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "BTC") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    } else if (CurrentCurrency.value == "BRL") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    //moeda convertida
    if (!(CurrentCurrency.value == selectedCurrency.value)) {
        if (CurrentCurrency.value == "BRL") {//BRL
            if (selectedCurrency.value == "USD") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "EUR") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "GBP") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "BTC") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "BTC"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "BRL") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedValue)
            }
        }else if(CurrentCurrency.value == "USD"){//moeda local dolar
            if (selectedCurrency.value == "EUR") {
                const convertedValue = inputCurrencyValue / price
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "GBP") {
                const convertedValue = inputCurrencyValue / price
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "BTC") {
                const convertedValue = inputCurrencyValue / price
                currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "BTC"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "BRL") {
                const convertedValue = inputCurrencyValue / price
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedValue)
            }
        }
    }
    //par igual de moeda -- melhorar a lógica para mais pares de moeda
    if (CurrentCurrency.value == selectedCurrency.value) {
        if (selectedCurrency.value == "USD") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "EUR") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "GBP") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "BTC") {
            const convertedValue = inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "BTC"
            }).format(convertedValue)
        } else if (selectedCurrency.value == "BRL") {
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
    if (currentCurrency == "USD") {
        currentName.innerHTML = "Dólar americano"
        currentImg.src = "assets/estados-unidos.png"
    } else if (currentCurrency == "EUR") {
        currentName.innerHTML = "Euro"
        currentImg.src = "assets/euro.png"
    } else if (currentCurrency == "GBP") {
        currentName.innerHTML = "Libra"
        currentImg.src = "assets/libra.png"
    } else if (currentCurrency == "BTC") {
        currentName.innerHTML = "Bitcoin"
        currentImg.src = "assets/bitcoin.png"
    } else if (currentCurrency == "BRL") {
        currentName.innerHTML = "Real"
        currentImg.src = "assets/brasil.png"
    }

    //moeda convertida
    if (selectedCurrency == "USD") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "assets/estados-unidos.png"
    } else if (selectedCurrency == "EUR") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png"
    } else if (selectedCurrency == "GBP") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/libra.png"
    } else if (selectedCurrency == "BTC") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "assets/bitcoin.png"
    } else if (selectedCurrency == "BRL") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "assets/brasil.png"
    }

    convertValues()
}

selectedCurrency.selectedIndex = 0
CurrentCurrency.addEventListener("change", currencyChange)
selectedCurrency.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)