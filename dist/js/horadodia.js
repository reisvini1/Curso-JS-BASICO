function horas(){
    var data = new Date()
    var horaatual = data.getHours()

    var titulo_hora = document.querySelector('div#titulo_hora')
    var hora = document.querySelector('#hora')
    var imagem_hora = document.querySelector('#imagem_hora')

    if(horaatual >= 5 && horaatual < 12)
    {
        hora.innerHTML = `Agora são ${horaatual} horas!`
        titulo_hora.innerHTML = 'Bom dia!'
        imagem_hora.innerHTML = `<img src="https://i.imgur.com/F80MvI8.png"></img>`
        document.body.style.backgroud = '#e2cd9f' 
    }
    else if(horaatual >= 12 && horaatual < 18)
    {
        hora.innerHTML = `Agora são ${horaatual} horas!`
        titulo_hora.innerHTML = 'Boa tarde!'
        imagem_hora.innerHTML = `<img src="https://i.imgur.com/X0NcrVS.png"></img>`
        document.body.style.background = '#b9846f'
    }
    else if(horaatual >= 18)
    {
        hora.innerHTML = `Agora são ${horaatual} horas!`
        titulo_hora.innerHTML = 'Boa noite!'
        imagem_hora.innerHTML = `<img src="https://i.imgur.com/KvtKmEd.png"></img>`
        document.body.style.background = '#515154'
    }
    else {
        hora.innerHTML = `{ERRO} HORA INVÁLIDA`
        titulo_hora.innerHTML = '{ERRO} HORA INVÁLIDA'
        imagem_hora.innerHTML = `{ERRO} HORA INVÁLIDA`
    }
}