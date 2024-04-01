const convertButton = document.querySelector(".converter-button")
const CurrentCurrency = document.querySelector(".currency-select-current") //moeda local
const selectedCurrency = document.querySelector(".currency-select-to-convert") // moeda estrangeira

async function btcToGbp() {
    if (CurrentCurrency.value == "BTC") {
        if (selectedCurrency.value == "GBP") {
            const two = await fetch(`https://economia.awesomeapi.com.br/json/last/BTC-BRL,BRL-GBP`);
            const newData = await two.json()
            const one = newData.BTCBRL.bid
            const four = newData.BRLGBP.bid
            const data = one * four
            return data
        } else {
            return null
        }
    }


}

async function getQuote() {
    try {
        const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${CurrentCurrency.value}-${selectedCurrency.value}`);

        if (!response.ok) {
            throw new Error('Erro ao obter cotação da API');
        }

        const data = await response.json();
        console.log(`${CurrentCurrency.value}-${selectedCurrency.value}`);
        return data;
    } catch (error) {
        console.error('Erro ao obter cotação:', error.message);

        alert(`🇧🇷 Desculpe, ainda não temos esta contação. 😭\nVou melhorar prometo! 🙏\n\n🇬🇧 Sorry, we don't have this quotation yet. 😭\nI'll improve, I promise! 🙏 `)

        return null;
    }
}


function formatValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado pelo usuario
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

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


    //moeda estrangeira
    if (selectedCurrency.value == "USD") {
        const convertedValue = ""
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    } else if (selectedCurrency.value == "EUR") {
        const convertedValue = ""
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    } else if (selectedCurrency.value == "GBP") {
        const convertedValue = ""
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue)
    } else if (selectedCurrency.value == "BTC") {
        const convertedValue = ""
        currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue)
    } else if (selectedCurrency.value == "BRL") {
        const convertedValue = ""
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }
}//fim formatValues


async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado pelo usuario
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    let finalPrice = 0
    let price = 0

    if (CurrentCurrency.value == "BTC") {
        if (selectedCurrency.value == "GBP") {
            const quoteData = await btcToGbp()
            finalPrice = quoteData
        }
    }

    //Quando os pares de moedas são iguais
    if ((CurrentCurrency.value == selectedCurrency.value)) {
        if (selectedCurrency.value == "USD") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        } else if (selectedCurrency.value == "EUR") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        } else if (selectedCurrency.value == "GBP") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        } else if (selectedCurrency.value == "BTC") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue)
        } else if (selectedCurrency.value == "BRL") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        }
    }

    //precisa vir depois para não causar erro 
    if (!(CurrentCurrency.value == "BTC" && selectedCurrency.value == "GBP")) {
        if (!(CurrentCurrency.value == selectedCurrency.value)) {
            console.log("cheguei")
            const quoteData = await getQuote()
            price = (quoteData[`${CurrentCurrency.value}${selectedCurrency.value}`].bid)
            console.log(quoteData[`${CurrentCurrency.value}${selectedCurrency.value}`].bid)
        }
    }
    //lógica para conversão de valores 
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
        }
        //converter qualquer moeda para o real 
        if (selectedCurrency.value == "BRL") {//BRL
            const convertedValue = price * inputCurrencyValue
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedValue)
        }
        //dolar para outras moedas não (menos o) real
        if (CurrentCurrency.value == "USD") {//USD
            if (selectedCurrency.value == "EUR") {
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
            }else if (selectedCurrency.value == "BRL") {//BRL
                const convertedValue = price / inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(convertedValue)
            }
        }
        //EURO para outras moedas menos o real
        if (CurrentCurrency.value == "EUR") {//EUR
            if (selectedCurrency.value == "USD") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
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
            }
        }
        //libra para outras moedas menos o real 
        if (CurrentCurrency.value == "GBP") {//GBP
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
            } else if (selectedCurrency.value == "BTC") {
                const convertedValue = price * inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: "BTC"
                }).format(convertedValue)
            }
        }
        //bitcoin para outras moedas (menos o real)
        if (CurrentCurrency.value == "BTC") {//BTC
            if (selectedCurrency.value == "USD") {
                const convertedValue = price / inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "EUR") {
                const convertedValue = price / inputCurrencyValue
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(convertedValue)
            } else if (selectedCurrency.value == "GBP") {
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP"
                }).format(finalPrice)
            }
        }
    }

}//fim 

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

    formatValues()
}

selectedCurrency.selectedIndex = 0
CurrentCurrency.selectedIndex = 0
CurrentCurrency.addEventListener("change", currencyChange)
selectedCurrency.addEventListener("change", currencyChange)
convertButton.addEventListener("click", convertValues)