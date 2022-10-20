export class MathUtils {
  constructor() {}

  mdc(num1: number, num2: number): number {
    if (num1 == 0) return num2;

    return this.mdc(num1 % num2, num1);
  }

  euler(num: number): number {
    let result = 0;

    for (let i = 2; i < num; i++) {
      if (this.mdc(i, num) == 1) result++;
    }
    return result;
  }
}

const math = new MathUtils();

export default math;
