function pais() {
    var paiss = document.querySelector('select#pais')
    var nacion = document.querySelector('div#nacionalidade')
    var paisid = paiss.options[paiss.selectedIndex].value

    if(paisid == 1) {
        nacion.innerHTML = `Você é Brasileiro`
    }
    else if(paisid == 2) {
        nacion.innerHTML = `Você é Chileno`
    }
    else if(paisid == 3) {
        nacion.innerHTML = `Você é Mexicano`
    }
    else if(paisid == 4) {
        nacion.innerHTML = `Você é Argentino`
    }
}