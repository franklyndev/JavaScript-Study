let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora > 12 && hora > 18) {
    console.log('Boa tarde!')
} else if (hora >= 18) {
    console.log('Boa noite!')
} else {
    console.log('Bom dia!')
}
