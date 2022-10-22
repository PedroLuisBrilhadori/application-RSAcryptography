import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/Header';
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const Home: NextPage = () => {
  const [objectsAsk, setObjectsAsk] = useState([
    {
      ask: 'O que é criptografia ?',
      answer: '"A criptografia é um conjunto de técnicas pensadas para proteger uma informação de modo que apenas o emissor e receptor consigam compreendê-la. É utilizada em comunicações digitais, como na troca de mensagens ou em pagamentos online." ',
      link: 'https://www.totvs.com/blog/negocios/criptografia/#:~:text=A%20criptografia%20%C3%A9%20um%20conjunto,mensagens%20ou%20em%20pagamentos%20online',
      hasShow: true,
    },
    
    {
      ask: 'O que é descriptografia ?',
      answer: '"A descriptografia é a operação inversa da criptografia. Esse é o processo realizado para “destravar” seus arquivos criptografados. Em outras palavras, a descriptografia é o processo de transformação de dados que foram tornados ilegíveis por meio da criptografia. Ou seja, é a atitude de trazer um arquivo, ou conjunto de dados, de volta ao formato não criptografado. Na descriptografia, o sistema extrai e converte os dados ilegíveis e os transforma em textos e imagens facilmente compreensíveis não apenas pelo leitor, mas também pelo sistema. Quando realizado por meio de uma chave, usa-se no processo de descriptografia a mesma chave ou senha utilizada para criptografar seus dados anteriormente. Portanto, para realizar a descriptografia você deve saber a chave que foi usada anteriormente, durante a criptografia." ',
      link: 'https://blog.ecoit.com.br/descriptografia/',
      hasShow: true,
    },

    {
      ask: 'Importância da criptografia',
      answer: '"A grande necessidade de uso da criptografia está na proteção da identidade e dos dados do usuário. Caso haja alguma tentativa de invasão, o sistema de criptografia protege todas as informações importantes: tanto os dados pessoais dos usuários o quanto o conteúdo de arquivos e de mensagens trocadas." ',
      link: 'https://acaditi.com.br/entenda-a-importancia-da-criptografia-para-a-seguranca-dos-seus-dados-na-internet/#:~:text=A%20grande%20necessidade%20de%20uso,arquivos%20e%20de%20mensagens%20trocadas',
      hasShow: true,
    },

    {
      ask: 'O que é uma chave criptográfica ?',
      answer: '"Na criptografia, uma chave é uma sequência de caracteres usada em um algoritmo de criptografia para alterar os dados de forma que pareçam aleatórios. Como uma chave física, ele bloqueia (criptografa) os dados para que apenas alguém com a chave certa possa desbloqueá-los (descriptografá-los)." ',
      link: 'https://www.cloudflare.com/pt-br/learning/ssl/what-is-a-cryptographic-key/#:~:text=Na%20criptografia%2C%20uma%20chave%20%C3%A9,los%20(descriptograf%C3%A1%2Dlos)',
      hasShow: true,
    },

    {
      ask: 'O que é uma chave criptográfica pública ?',
      answer: '"A criptografia de chave pública é um método de criptografia ou de assinatura de dados com duas chaves diferentes e tornar uma das chaves, a chave pública, disponível para qualquer pessoa usar... É amplamente utilizado, especialmente para TLS/SSL, o que torna o HTTPS possível." (também é conhecida como criptografia assimétrica em que o o remetente e o destinatário usam duas chaves diferentes [um par de chave pública-chave privada]) ',
      link: 'https://www.cloudflare.com/pt-br/learning/ssl/how-does-public-key-encryption-work/',
      hasShow: true,
    },

    {
      ask: 'O que é uma chave criptográfica privada ?',
      answer: '"Na criptografia, uma chave é uma sequência de caracteres usada em um algoritmo de criptografia para alterar os dados de forma que pareçam aleatórios. Como uma chave física, ele bloqueia (criptografa) os dados para que apenas alguém com a chave certa possa desbloqueá-los (descriptografá-los)." (https://www.cloudflare.com/pt-br/learning/ssl/how-does-public-key-encryption-work/), (também conhecida como criptografia simétrica, "a mesma chave criptografa e descriptografa dados. Para que a criptografia simétrica funcione, as duas ou mais partes comunicantes devem saber qual é a chave; para que permaneça segura, nenhum terceiro deve ser capaz de adivinhar ou roubar a chave." [https://www.cloudflare.com/pt-br/learning/ssl/what-is-asymmetric-encryption/]) ',
      link: 'https://www.coinbase.com/pt/learn/crypto-basics/what-is-a-private-key/',
      hasShow: true,
    },

    {
      ask: 'O que é uma chave de sessão ?',
      answer: '"Uma chave de sessão é qualquer chave de criptografia simétrica usada para criptografar apenas uma sessão de comunicação.Em outras palavras, é uma chave temporária que é usada apenas uma vez, durante um período de tempo, para criptografar e descriptografar dados entre duas partes; as conversas futuras entre as duas partes seriam encriptadas com chaves de sessão diferentes.Uma chave de sessão é como uma senha que alguém redefine toda vez que faz login.") ',
      link: 'https://www.cloudflare.com/pt-br/learning/ssl/what-is-a-session-key/',
      hasShow: true,
    },
  ]);

  return (
    <>
      <Head>
        <title>Criptografar e descriptografar texto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <section className='m-[20px]'>
        <h1 className='text-3xl'>Site encriptador e decriptografador</h1>
        <h2 className='text-2xl'>Perguntas frequentes sobre criptografia</h2>
        <br />

        {objectsAsk.map((item) => (

          <div key={item.ask}>
            <div className='flex'>
              <h3 className='text-xl'>{item.ask}</h3>

              {item.hasShow == false ?
                <ChevronRightIcon className='ml-[10px] h-[20px] place-self-center cursor-pointer' onClick={() => setObjectsAsk(objectsAsk.map((items) =>
                  items.ask === item.ask
                      ? {
                            ...items,
                            hasShow: true,
                        }
                      : { ...items }
                  ))} />
                :
                <ChevronDownIcon className='ml-[10px] h-[20px] place-self-center cursor-pointer' onClick={() => setObjectsAsk(objectsAsk.map((items) =>
                  items.ask === item.ask
                      ? {
                            ...items,
                            hasShow: false,
                        }
                      : { ...items }
                  ))}
                />
              }

            </div>
            
            {item.hasShow == true &&
              <div>
                <p>{item.answer}</p>
                <a href={item.link} className='break-words'>{item.link}</a>
              </div>
            }

            <br />

          </div>
        ))}

      </section>
    </>
  )
}

export default Home;