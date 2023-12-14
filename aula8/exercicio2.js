const nome = 'Angélica'
const sobrenome = 'Rezende'
const idade = 19
const peso = 83
const alturaEmM = 1.58
let indiceMassaCorporal
let anoNascimento

indiceMassaCorporal = peso/alturaEmM * alturaEmM
anoNascimento = 2023 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)