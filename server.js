const express = require('express');

const app = express();

const matrizAdj = new Array(
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
)

const listaAdj = new Array(
  [2, 3],
  [1, 3],
  [1, 2]
)

console.log()
console.log('Matriz Adjacente')
console.log('    0, 1, 2  ')
matrizAdj.forEach((posicao, index) => {
  console.log(`${index}`, posicao)
})
console.log()

console.log('Lista Adjacente')
listaAdj.forEach((posicao, index) => {
  console.log(`${index}: `, posicao)
})
console.log()

app.listen(3333, () => {
  console.log('Server is running');
})