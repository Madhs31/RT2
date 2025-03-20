export default class Bhaskara {
  calcular(a: number, b: number, c: number): string {
    let delta = b * b - 4 * a * c
    if (delta < 0) {
      return 'Não há raízes reais.'
    } else if (delta === 0) {
      let x = -b / (2 * a)
      return `Raiz única: x = ${x}`
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a)
      let x2 = (-b - Math.sqrt(delta)) / (2 * a)
      return `Raízes: x1 = ${x1}, x2 = ${x2}`
    }
  }
}
