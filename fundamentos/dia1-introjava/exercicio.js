let a = 33;
let b = 159;
let c = 15;
//operações aritméticas
let adicao = a + b;
let subtracao = a - b;
let multiplicao = a * b;
let divisao = a / b;
let porcentagem = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicao);
console.log(porcentagem);

if (divisao < 1) {
    console.log(divisao + ' - Dízima periódica');
}
else if (divisao > 1) {
    console.log(divisao);
}
//compare 2 números (else/if)
if (a < b) {
    console.log('O número '+b + ' é maior dentre os dois.');    
}
else if (a > b) {
        console.log('O número '+a + ' é maior dentre os dois.')
}
//compare 3 números (else/if)
if (a > b && a > c) {
    console.log('O número '+a + ' é maior dentre os três.')
}
else if (b > a && b > c) {
    console.log('O número '+b + ' é maior dentre os três.');
}
else if (c > a && c > b) {
    console.log('O número '+c + ' é maior dentre os três.');
}
//retorne positivo ou negativo
