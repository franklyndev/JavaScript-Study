let head = document.body.getElementsByTagName('h2')[0]

function converter() {
    let temperatura = Number(prompt('Digite uma temperatura em graus Celcius (°C)'))
    head.innerHTML = `A temperatura de ${temperatura}°C, corresponde a...`
    let temps = document.body.querySelector('div#temperaturas')
    temps.innerHTML = `<p>${(temperatura+273.15).toLocaleString('pt-BR')}°K (Kelvin)</p>
    <p>${((temperatura*9/5)+32).toLocaleString('pt-BR')}°F (Fahrenheit)</p>`
}