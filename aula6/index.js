let nome //Declarou a variável 
nome = 'João' // Inicializando a variável com o valor de String

console.log(nome, 'nasceu em 1984.')
console.log('Em 2000', nome, 'conheceu Maria.')
console.log(nome, 'casou-se com Maria em 2012')
console.log('Maria teve 1 filho com', nome, 'em 2015.')
console.log('O filho de', nome, 'se chama Eduardo.')

//Não podem ser criadas variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos

let nomeCliente = 'João'
console.log(nomeCliente)


//Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive(letra maiúscula e minúscula fazem diferença)
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.

let nomeComprador = 'Angélica'
let nomecomprador = 'Rezende'

console.log(nomeComprador, nomecomprador)
