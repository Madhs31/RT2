import calculo from './calculo'

export default class radiciacao extends calculo {
  public calcular(number1: number, number2: number): number {
    return Math.pow(number1, 1 / number2)
  }
}
