function contar(){
    var inicio = window.document.getElementById('inicio')
    var final =  window.document.getElementById('fim')
    var passo=  window.document.getElementById('passo')
    var res = window.document.getElementById('resposta') 
    
    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        if(p <=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            while(i <= f){
                res.innerHTML += ` ${i} \u{1F449} `
                i = i + p
            } 
        }else{
            if(i > f){
                //contagem decrescente
                while(f <= i){
                    res.innerHTML += `${i} &#128073; `
                    i = i - p
                }  
            }   
        }
    res.innerHTML += ` \u{1F3C1}`    
    }
    
} 
