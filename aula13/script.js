function carregar() {
    let msg = window.document.getElementById('msg') // Objeto "msg" instanciado com a mensagem que estiver aparecendo na div que tem o id='msg'.
    let img = window.document.getElementById('imagem') // Objeto "img" instanciado com a imagem que estiver aparecendo na tag <img> no momento.
    let head = window.document.querySelector('h1#text')
    let foot = document.getElementById('foot')
    let data = new Date()
    let hora = data.getHours()
    if (hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
        img.src = 'imagens/Manha.png'
        head.innerHTML = 'Bom dia!'
        window.document.body.style.backgroundColor = '#e2cd9f'
        foot.style.textShadow = '2px 2px 5px black'
        head.style.textShadow = '2px 3px 14px black'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} hrs da tarde.`
        img.src = 'imagens/Tarde.png' 
        head.innerHTML = 'Boa Tarde!'
        window.document.body.style.backgroundColor = '#a57163'
        foot.style.textShadow = '2px 2px 5px black'
        head.style.textShadow = '2px 3px 14px black'
    } else if (hora >= 18) {
        msg.innerHTML = `Agora são ${hora} hrs da noite.`
        img.src = 'imagens/Noite.png'
        head.innerHTML = 'Boa Noite!'
        document.body.style.backgroundColor = '#011830'
        foot.style.textShadow = '2px 2px 5px black'
        head.style.textShadow = '2px 3px 14px black'
    }
    
}

