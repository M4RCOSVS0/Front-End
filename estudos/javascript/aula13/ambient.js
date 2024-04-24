
//TESTE LÓGICO NO FINAL
/*

TESTE LÓGICO NO COMEÇO
*/

/*
console.log('oi')
console.log('oi')
console.log('oi')
console.log('oi')
console.log('oi')

var c = 10
do{
    console.log(`Passo ${c}`)  
    c-- //c = c + 1
}while(c = 1)
var c = 10
while (c >= 1 ){
    console.log(`Passo ${c}`)  
    c-- //c = c + 1
}
*/
let n = 5
let c = n
    let fat = 1
    while (c > 1) {
        console.log(`${c} x `)
        fat *= c // Correspondente ao cálculo fat = fat * c
        c --
    }console.log(`${fat}`)