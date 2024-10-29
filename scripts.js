
//criando função para monitorar o botão de conversão
const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    //indo lá no arquivo html e pegar apenas o valor que esta sendo digitado dentro do input que tem a class: input-currency.
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valorEmReal= document.querySelector(".curency-value-to-convert") //valor em real
    const valorConvertido = document.querySelector(".curency-value") //valor em outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2 //valor ficticio para o dolar
    const euroToday = 6.20 //valor fictício

    //fazendo o cálculo da conversão de moeda
    //const convertedValue = inputCurrencyValue / dolarToday


    //vamos fazer uma verificação, se o valor escolhdo no inpout de option é uma moeada ou outra, dependendo da moeda selecionada ele vai executar uma ação diferente.
    if(currencySelect.value=="dolar"){
        //trocar o valor do texto do valor convertido pelo resultado da conversao
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }


    //convertendo o valor para Euro

    if(currencySelect.value=="euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-DE', {
        style: "currency",
        currency: "EUR",
        }).format(inputCurrencyValue/euroToday)
    }

    //pegar o input e colocar na tela do arquivo em html o resultado que foi adquirido da conversao. 

    valorEmReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency:"BRL"
    }).format(inputCurrencyValue) //quando clicar no botao o texto no html sera alterado. 

}


//criar uma função que será chamada todas as vezes que houver uma troca no option da caixa de seleção de moedas.

function changeCurrency () {
    const currencyName = document.getElementById("currency-name") 
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.scr = "dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = 'euro.png'
        
    }

    convertValues() //chamando a função para mudar os valores da conversão
}


//observar quando ouver a troca na caixa de seleção da moeda a ser convertida.
currencySelect.addEventListener("change", changeCurrency)
//objetivo é mapear se o botão foi clicado e chamar a função.
convertButton.addEventListener("click", convertValues )
