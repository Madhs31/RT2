import calculo from './calculo'

export default class subtracao extends calculo {
  public calcular(number1: number, number2: number): number {
    return number1 - number2
  }
}
