function converter() {
    let distancia = Number(prompt('Digite uma distância em metros(m)'))

    let h = window.document.getElementById('text')
    h.innerHTML = `A distância de ${distancia} metros, corresponde a...`
    
    let medidas = document.querySelector('div#medidas')

    medidas.innerHTML = `<p>${(distancia / 1000).toLocaleString('pt-BR')} quilômetros (Km)</p>
    <p>${(distancia / 100).toLocaleString('pt-BR')} hectômetros (Hm)</p>
    <p>${(distancia / 10).toLocaleString('pt-BR')} decâmetros (Dam)</p>
    <p>${(distancia * 10).toLocaleString('pt-BR')} decímetros (dm)</p>
    <p>${(distancia * 100).toLocaleString('pt-BR')} centímetros (cm)</p>
    <p>${(distancia * 1000).toLocaleString('pt-BR')} milímetros (mm)</p>`
    
}