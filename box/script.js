function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('text')
    var res = document.getElementById('res')
    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        window.alert('verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - formularioAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formularioSexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', './img/crianca-menino.jpg');

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './img/jovemhomem.jpg');

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './img/homemadulta.jpg');

            } else {
                //idoso
                img.setAttribute('src', './img/idoso.jpg');
            }

        } else if (formularioSexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', './img/menina-crainca.jpg');

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './img/jovemmulher.jpg');

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './img/mulheradulta.jpg');
            } else {
                //idoso
                img.setAttribute('src', './img/idosa.jpg');
            }
        }

        res.style.textAlign = 'center'
        res.style.fontSize = '20px'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}