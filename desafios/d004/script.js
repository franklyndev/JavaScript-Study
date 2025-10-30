function calcular() {
    let produto = prompt('Que produto você está comprando?')
    let preco = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    //preco = preco.toLocaleString('pt-BR')
    let valor = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    
    let troco = valor - preco
    alert(`Você comprou ${produto} que custou R$ ${preco.toLocaleString('pt-BR')}.
    \n
    Deu R$ ${valor.toLocaleString('pt-BR')} em dinheiro e vai receber R$ ${troco.toLocaleString('pt-BR')} de troco.\n
    Volte Sempre!`)
}