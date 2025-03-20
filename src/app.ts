import * as readline from 'readline'
import Calculo from './Calculo'
import Bhaskara from './Bhaskara'
import Soma from './Soma'
import Multiplicacao from './Multiplicacao'
import Subtracao from './Subtracao'
import Divisao from './Divisao'
import Potenciacao from './Potenciacao'
import Radiciacao from './Radiciacao'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function iniciarCalculadora() {
  console.log('\nCalculadora CLI - Escolha uma opção:')
  console.log('1. Soma')
  console.log('2. Subtração')
  console.log('3. Multiplicação')
  console.log('4. Divisão')
  console.log('5. Potenciação')
  console.log('6. Radiciação')
  console.log('7. Equação do segundo grau (Bhaskara)')
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
          let resultado = new Bhaskara().calcular(a, b, c)
          console.log('Resultado:', resultado)
          iniciarCalculadora()
        }
      )
    } else {
      rl.question('Digite dois números separados por espaço: ', (input) => {
        let [num1, num2] = input.split(' ').map(Number)
        let operacao: Calculo

        switch (opcao) {
          case '1':
            operacao = new Soma()
            break
          case '2':
            operacao = new Subtracao()
            break
          case '3':
            operacao = new Multiplicacao()
            break
          case '4':
            operacao = new Divisao()
            break
          case '5':
            operacao = new Potenciacao()
            break
          case '6':
            operacao = new Radiciacao()
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
