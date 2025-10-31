let valorDolar;

function cotacao() {
    valorDolar = Number(prompt('Quanto está a cotação do dólar atualmente?'))
}

function converter() {
    let reais = Number(prompt('Quantos R$ você tem na carteira?'))
    let dolares = reais / valorDolar
    let text = document.getElementById('text')
    text.innerHTML = `<p>Você tem $${dolares.toLocaleString('pt-BR')} dolares!</p>`
}