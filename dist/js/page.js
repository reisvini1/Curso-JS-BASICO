function calcular(){
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong><p>`
    if (vel > 60) {
        res.innerHTML += `Você excedeu o limite de velocidade de 60 Km. MULTADO`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
    
}