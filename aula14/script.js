function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let txtAno = window.document.getElementById('txtAno')
    let masc = window.document.getElementById('masc')
    let fem = window.document.getElementById('fem')
    let foto = window.document.getElementById('foto')


    if (txtAno.value.length == 0 || txtAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - txtAno.value
    }
}