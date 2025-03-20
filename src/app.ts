import * as readline from 'readline'
import bhaskara from './bhaskara'
import calculo from './calculo'
import divisao from './divisao'
import multiplicacao from './multiplicacao'
import potenciacao from './potenciacao'
import radiciacao from './radiciacao'
import soma from './soma'
import subtracao from './subtracao'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function iniciarCalculadora() {
  console.log('\nCalculadora CLI - Escolha uma opção:')
  console.log('1. soma')
  console.log('2. subtração')
  console.log('3. multiplicação')
  console.log('4. divisão')
  console.log('5. potenciação')
  console.log('6. radiciação')
  console.log('7. equação do segundo grau (bhaskara)')
  console.log('8. Sair')

  rl.question('\nDigite o número da operação desejada: ', (opcao) => {
    if (opcao === '8') {
      console.log('Encerrando calculadora...')
      rl.close()
      return
    }

    if (opcao === '7') {
      rl.question(
        'Digite os coeficientes a, b e c separados por espaço: ',
        (input) => {
          let [a, b, c] = input.split(' ').map(Number)
          let resultado = new bhaskara().calcular(a, b, c)
          console.log('Resultado:', resultado)
          iniciarCalculadora()
        }
      )
    } else {
      rl.question('Digite dois números separados por espaço: ', (input) => {
        let [num1, num2] = input.split(' ').map(Number)
        let operacao: calculo

        switch (opcao) {
          case '1':
            operacao = new soma()
            break
          case '2':
            operacao = new subtracao()
            break
          case '3':
            operacao = new multiplicacao()
            break
          case '4':
            operacao = new divisao()
            break
          case '5':
            operacao = new potenciacao()
            break
          case '6':
            operacao = new radiciacao()
            break
          default:
            console.log('Opção inválida!')
            iniciarCalculadora()
            return
        }

        try {
          console.log(
            'O resultado da operação é:',
            operacao.calcular(num1, num2)
          )
        } catch (error) {
          console.error(error.message)
        }
        iniciarCalculadora()
      })
    }
  })
}

iniciarCalculadora()
