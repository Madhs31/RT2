import calculo from './calculo'

export default class divisao extends calculo {
  public calcular(number1: number, number2: number): number {
    if (number2 === 0) {
      throw new Error('Não é possível dividir por zero')
    }

    return number1 / number2
  }
}
