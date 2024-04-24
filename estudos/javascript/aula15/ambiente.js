let num = [5, 8, 2, 9, 3]
let N = 6
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(N)
if(pos == -1){
    console.log(`O valor ${N} não foi encontrado! `)
}else{
    console.log(`o valor ${N} está na posição ${pos}`)
}
