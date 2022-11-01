import { ClipboardDocumentIcon, KeyIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Header from "../components/Header";
import Loading from "../components/loading";

export default function GenerateKeys() {
  const [keys, setKeys] = useState({ privateKey: "", publicKey: "" });
  const [keySize, setKeySize] = useState(250);
  const [isLoading, setLoading] = useState(false);

  function handleOnDoubleClickKeyPublic(e: any) {
    navigator.clipboard.writeText(keys.publicKey);
  }

  function handleOnDoubleClickKeyPrivate(e: any) {
    navigator.clipboard.writeText(keys.privateKey);
  }

  const getData = async () => {
    setLoading(true);
    const data = await fetch("/api/keys", {
      method: "POST",
      body: JSON.stringify({
        keysize: keySize,
      }),
    });
    const json = await data.json();
    setLoading(false);

    setKeys({
      publicKey: json.data.public,
      privateKey: json.data.private,
    });

    localStorage.setItem("publicKey", json.data.public);
    localStorage.setItem("privateKey", json.data.private);
  };

  return (
    <>
      <Header />
      <div className="mx-10 mt-10 w-auto h-max">
        Tamanho da chave (em bytes):
        <select
          placeholder="Chave assincrona (privada) criptografada"
          className="w-full h-[30px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto"
          onChange={(e) => {
            setKeySize(Number(e.target.value));
          }}
        >
          <option>250</option>
          <option>1048</option>
          <option>2048</option>
        </select>
      </div>

      <div className="mx-10 mt-5 w-auto h-max flex items-center border-2 border-stone-800 rounded-xl">
        <p
          className="w-full max-h-max bg-white text-black pl-[10px] rounded-xl break-words pr-[40px] p-[10px]"
          onDoubleClick={handleOnDoubleClickKeyPublic}
        >
          {keys.publicKey}
        </p>
        <ClipboardDocumentIcon
          className="w-[30px] h-[30px] ml-[-40px] cursor-pointer"
          onClick={handleOnDoubleClickKeyPublic}
        />
      </div>

      <div className="mx-10 mt-5 mb-10 w-auto h-max flex items-center border-2 border-stone-800 rounded-xl">
        <p
          className="w-full max-h-max bg-white text-black pl-[10px] rounded-xl break-words pr-[40px] p-[10px]"
          onDoubleClick={handleOnDoubleClickKeyPrivate}
        >
          {keys.privateKey}
        </p>
        <ClipboardDocumentIcon
          className="w-[30px] h-[30px] ml-[-40px] cursor-pointer"
          onClick={handleOnDoubleClickKeyPrivate}
        />
      </div>

      <div className="items-center w-full flex place-content-center mb-[10px]">
        <button
          onClick={isLoading ? () => {} : getData}
          type="submit"
          className="p-[10px] w-11/12 bg-stone-800 rounded-xl text-white text-lg border-black border-2 hover:bg-white hover:text-black"
        >
          {isLoading ? (
            <div>
              <Loading />
              Gerando Chave...
            </div>
          ) : (
            <div className="flex items-center place-content-center">
              <KeyIcon width={50} height={50} className="mr-[10px]" />
              Gerar
            </div>
          )}
        </button>
      </div>
    </>
  );
}
