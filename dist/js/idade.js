data = new Date
anoatual = data.getFullYear()

function confirma() {
    var genero = document.querySelector('select#sexo')
    var ano_nasc = document.querySelector('input#ano_nascimento')

    var text_idade = document.querySelector('div#text_idade')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var txt_gen = ''

    if(genero.value == 1) {
        txt_gen = 'Masculino'
    } else if(genero.value == 2) {
        txt_gen = 'Feminino'
    }
    
    if(ano_nasc.value > anoatual) {
        alert('Digite um ano válido')
    } else {

    dif = anoatual - ano_nasc.value
    if(ano_nasc.value!="" && genero.value!="") {
        text_idade.innerHTML = `Detectamos ${txt_gen} com ${dif} anos`
    if(genero.value == 1) {

        if(dif >= 0 && dif <= 10) {
        img.setAttribute('src', 'https://i.imgur.com/WQqoYlv.png')
        }

        else if(dif <= 25) {
        img.setAttribute('src', 'https://i.imgur.com/Gq4aS5q.png')
        }
        else if(dif <= 60) {
        img.setAttribute('src', 'https://i.imgur.com/Yp0zBgW.png')
        }
        else if(dif >= 61) {
        img.setAttribute('src', 'https://i.imgur.com/I2RqUhX.png')
        }
    }

    else if(genero.value == 2) {

        if(dif >= 0 && dif <= 10) {
        img.setAttribute('src', 'https://i.imgur.com/fUhAn11.png')
        }

        else if(dif <= 25) {
        img.setAttribute('src', 'https://i.imgur.com/Xrs3xH9.png')
        }
        else if(dif <= 60) {
        img.setAttribute('src', 'https://i.imgur.com/YbnwZF6.png')
        }
        else if(dif >= 61) {
        img.setAttribute('src', 'https://i.imgur.com/rqoQw7G.png')
        }
    }
    res.appendChild(img)
    }
    else {
        alert('Selecione as opcoes')        
    }

}}


