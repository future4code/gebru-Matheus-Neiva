let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// 10 , 5

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

//   10 10 10

let p = prompt('Quantas horas você trabalha por dia?')
let t = prompt('Quanto você recebe por dia?')
alert(`Voce recebe ${t / p} por hora`)

// p = horas t = salarioDiario

let nome
let idade
console.log(typeof nome, idade)

//como nenhuma variavel foi definida, o tipo da variavel ficou como undefined

const nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
console.log(typeof nome, typeof idade)

//Independente de no prompt ter sido escrito um numero, string ou boleano, o tipo da variavel vai ser sempre definido como string

let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
console.log('Olá ', nome, 'você tem ', idade, ' anos')

naturalidade = 'você é brasileiro?'
futebol = 'você gosta de futebol?'
viagem = 'você já viajou esse ano?'

naturalidadeA = prompt(naturalidade)
futebolA = prompt(futebol)
viagemA = prompt(viagem)

console.log(
  naturalidade,
  '-',
  naturalidadeA,
  '-',
  futebol,
  '-',
  futebolA,

  viagem,
  '-',
  viagemA,
)

let a = 10
let b = 25

let c = b
b = a
a = c

console.log('O novo valor de a é', a)
console.log('O novo valor de b é', b)

let numero1 = prompt('Digite um numero')
let numero2 = prompt('Digite outro numero')

let x = Number(numero1) + Number(numero2)
let y = Number(numero1) * Number(numero2)

console.log(x, y)
