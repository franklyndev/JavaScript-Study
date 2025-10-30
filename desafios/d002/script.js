function perguntar() {
    let nome = prompt('Qual o seu nome?')
    let idade = Number(prompt(`Olá ${nome}! quantos anos você tem?`)) // Convertendo prompt para Number precisa incluir todo o prompt com ().
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
    alert(typeof(idade))
}