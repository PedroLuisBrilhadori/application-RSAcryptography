// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { maxHeaderSize } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'
import MathUtils from '../../utils/math'
type Data = {
  name: string
}

function isCoPrime(a : number, b: number) { 
  var aFac = MathUtils.euler(a);
  var bFac = MathUtils.euler(b);
  var valueTested = 0, x;

  for(x = 2;x < Math.max(a, b); x++) {
    valueTested = MathUtils.euler(x)

    if (valueTested === 0) {
      break;
    }
  }

  valueTested = 0
  x = 0

  for(x = 2;x < Math.max(a, b); x++) {
    valueTested = MathUtils.euler(x)

    if (valueTested === 0) {
      break;
    }
  }
  
  var result = aFac.every((x: any) => bFac.indexOf(x) < 0);
  return result;
}

function findDecryptionKeys(e: number, l: number): number {
  for(var x = l + 1;x < l + Number.MAX_VALUE; x++) {
      if(x * e % l === 1) {
        return x
      }
  }

  return 0;
}

function findEncryptionKeys(l: number, n: number): number {
  var arr = [];
  for(var i = 2; i < l; i++) {
      if(isCoPrime(i, l) && isCoPrime(i, n))
          if(arr.length > 5) return i;
  }

  return 0
}

function powerMod(base: number, exponent: number, modulus: number) {
  if (modulus === 1) return 0;
  var result = 1;
  base = base % modulus;
  while (exponent > 0) {
      if (exponent % 2 === 1)  //odd number
          result = (result * base) % modulus;
      exponent = exponent >> 1; //divide by 2
      base = (base * base) % modulus;
  }
  return result;
}       

function encrypted(e: number, n: number, text: string) {
  var ascii = Array.from(Array(text!.length).keys()).map(i => text!.charCodeAt(i));
  return ascii.map(i => powerMod(i, e, n));   
}

function decrypted(d: number, n: number, text: string) {
  var clipher = stringToNumberArray(text);
  var ascii = clipher.map((i: any) => powerMod(i, d, n));
  var message = "";
  return ascii.map((x: number) => message += String.fromCharCode(x));   
}

function stringToNumberArray(str: string) {
  return str.split(",").map(i => parseInt(i));
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const TEXT = req.query.text?.toString()
  const PRIMENUMBER1 = 197
  const PRIMENUMBER2 = 199
  const L = (PRIMENUMBER1 - 1) * (PRIMENUMBER2 - 1)
  const N = PRIMENUMBER1 * PRIMENUMBER2
  const E = findEncryptionKeys(L, N);
  const D = findDecryptionKeys(E, L);
  const TEXTENCRYPTED = encrypted(E, N, TEXT)
  const TEXTDECRYPTED = decrypted(D, N, TEXT)

  console.log(TEXT)
  res.status(200).json({ name: 'John Doe' })
}
