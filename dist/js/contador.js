function contador() {
    var txtn1 = document.querySelector('input#txt_num1')
    var txtn2 = document.querySelector('input#txt_num2')
    var txtn3 = document.querySelector('input#txt_num3')

    var num_txtn1 = txtn1.value
    var resultado = document.querySelector('div#resultado')

    if (num_txtn1 == '' || txtn2.value == '') {
        resultado.innerHTML = 'Preencha todos os campos'
    }
    else if(txtn3.value == '' || txtn3.value == 0) {
        alert('Não foi detectado um valor válido no passo. Considerando o valor = 1')
        txtn3.value = 1
        calc()
    }
    else if(num_txtn1 > txtn2.value) {
        alert('ERRO: O valor do ínicio é maior que o do final')
    } 
    else{
        calc()
    }

    function calc() {
        for (num_txtn1[txtn3.value]; num_txtn1 < txtn2.value; num_txtn1++) {
            console.log(num_txtn1)
            
            return num_txtn1
        }
    }
}