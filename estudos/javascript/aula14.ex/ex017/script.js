function gerar(){
    var número = window.document.getElementById('num')
    var tab = window.document.getElementById('seltab')
    if(número.value.length == 0){
        window.alert('Por favor,digite um número!')
    }else{
        n = Number(número.value)
        tab.innerHTML = ""
        for(let c = 1;c <= 10; c++){
            let x = c * n
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${x}`
            item.value = `tab${c}` //outras linguagens usam isso ex... php!
            tab.appendChild(item)
        }
    }
}