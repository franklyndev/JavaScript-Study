function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let txtAno = window.document.getElementById('txtAno')
    let descricao = window.document.getElementById('descricao')
    

    if (txtAno.value.length == 0 || txtAno > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(txtAno.value)
    
            descricao.innerHTML = `Idade: ${idade} `
        
    }

}