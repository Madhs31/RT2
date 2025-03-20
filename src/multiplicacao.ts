import Calculo from './calculo'

export default class multiplicacao extends calculo {
  public calcular(number1: number, number2: number): number {
    return number1 * number2
  }
}
