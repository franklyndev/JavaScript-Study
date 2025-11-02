function reajustar() {
    let nome = prompt('Qual é nome do funcionário?')

    let salario = Number(prompt(`Qual é o salário de ${nome}?`))

    let reajuste = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    let aumento = salario * (reajuste/100)
    let novoSal = aumento + salario
    let head = document.querySelector('h2#text')
    head.innerHTML = `${nome} recebeu um aumento salarial!`

    let text = document.querySelector('div#res')
    text.innerHTML = `<p>O salário atual era R$ ${salario.toLocaleString('pt-BR')}</p>
    <p>Com um aumento de ${reajuste}%, o salário vai aumentar R$ ${aumento.toLocaleString('pt-BR')} no próximo mês.</p>
    <p>E a partir daí, ${nome} vai passar a ganhar R$ ${novoSal.toLocaleString('pt-BR')}</p>`
}