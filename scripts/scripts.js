let num = document.querySelector('#numero')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("Valor inválido ou já inserido na lista")
    }
    num.value = ''
    num.focus()
}

function finalizarContagem() {
    if (valores.length == 0) {
        alert('Adicione algum valor na lista!')
    } else {
        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = `<p>Números cadastrados: ${total}</p>`
        res.innerHTML += `<p>Maior número: ${maior}</p>`
        res.innerHTML += `<p>Menor número: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números é: ${soma}</p>`
        res.innerHTML += `<p>A média de todos os números é: ${media}</p>`
    }
}