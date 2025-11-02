function calcular() {
    let produto = prompt('Qual é o produto que você está comprando?')
    let preco = Number(prompt(`Qual é o preço de ${produto}?`))
    let desconto = preco * 10/100
    let precoFinal = preco - desconto

    let text = document.getElementsByTagName('h2')[0]
    text.innerHTML = `Calculando desconto de 10% para ${produto}...`

    let res = document.querySelector('div#res')

    res.innerHTML = `<p>O preço original era R$ ${preco.toLocaleString('pt-BR')}.</p>
    
    <p>Você acaba de ganhar R$ ${desconto.toLocaleString('pt-BR')} de desconto (-10%).</p>
    
    <p>No fim, você vai pagar R$ ${precoFinal.toLocaleString('pt-BR')} no produto ${produto}.</p>`
    
}