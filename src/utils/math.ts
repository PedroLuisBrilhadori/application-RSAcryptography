import bigInt, { BigInteger } from "big-integer";

export interface Keys {
  public: string;
  private: string;
}

export class MathUtils {
  constructor() {}

  /** Função para gerar números primos aleatórios */
  randomPrime(bits: number): BigInteger {
    const min = bigInt.one.shiftLeft(bits - 1);
    const max = bigInt.one.shiftRight(bits).prev();

    while (true) {
      let p = bigInt.randBetween(min, max);
      if (p.isProbablePrime(256)) {
        return p;
      }
    }
  }

  /** Função que gera as chaves para encriptar os dados */
  generate(keySize: number): Keys {
    const e = this.randomPrime(20);
    const p = this.randomPrime(keySize / 2);
    const q = this.randomPrime(keySize / 2);
    const totient = bigInt.lcm(p.prev(), q.prev());

    const n = p.multiply(q);
    const d = e.modInv(totient);

    return {
      public: `${e}/${n}`,
      private: `${d}/${n}`,
    };
  }

  /** Função que transforma uma string em um BigInteger */
  encode(message: string): BigInteger {
    console.log(message);
    const codes = message
      .split("")
      .map((i) => i.charCodeAt(0))
      .join("");

    return bigInt(codes);
  }

  /** Função que transforma um BigInteger em uma string */
  decode(code: BigInteger): string {
    const codeString = code.toString();
    let decode = "";

    for (let i = 0; i < codeString.length; i += 2) {
      let num = Number(codeString.substr(i, 2));

      if (num <= 30) {
        decode += String.fromCharCode(Number(codeString.substr(i, 3)));
        i++;
      } else {
        decode += String.fromCharCode(num);
      }
    }

    return decode;
  }

  /** Função que criptografa uma menssagem */
  encrypt(message: BigInteger, publicKey: string): BigInteger {
    const e = bigInt(publicKey.split("/")[0]);
    const n = bigInt(publicKey.split("/")[1]);
    return bigInt(message).modPow(e, n);
  }

  /** Função que descriptografa uma menssagem */
  decrypt(message: BigInteger, privateKey: string): BigInteger {
    console.log(privateKey);
    const d = bigInt(privateKey.split("/")[0]);
    const n = bigInt(privateKey.split("/")[1]);

    return bigInt(message).modPow(d, n);
  }
}
const math = new MathUtils();

export default math;
