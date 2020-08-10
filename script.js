let bin = document.getElementById('b-input')
let result = document.getElementById('d-input')
let listpow = [128, 64, 32, 16, 8, 4, 2, 1]
let listbin = []

function convert() {
    string2list(bin, listbin)

    if (listbin.length > 8) {
        window.alert('PLEASE, ONLY EIGHT NUMBERS AT A TIME')
    }

    while (listbin.length < listpow.length) { // Coloca os dois arrays com mesmo length
        listpow.shift()
    }
    soma = arraycruiser(listbin, listpow)
    result.value = `${soma}`
    clean()    
}

// tranforma a string bin em um array, separando em vários elementos
function string2list(s, l) {
    for (let p of s.value) {
        if (p != 0 && p != 1) {
            clean()
            window.alert('PLEASE, ENTER A BINARY NUMBER')
            break;
        } else {
        l.push(p)
        }
    } return l
}

// multiplicas os elementos do array de mesma posição
function arraycruiser(l1, l2) {
    let soma = 0
    for (let p in l1) {
        x = l2[p] * l1[p]
        soma += x
    } return soma
    
}
// limpa os dados depois de obter o resultado
function clean(){
    listbin = []
    listpow = [128, 64, 32, 16, 8, 4, 2, 1]
    bin.focus()
    bin.value = ''
}