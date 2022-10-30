import React, { useState } from "react";
import Header from "../components/Header";
import {
  ClipboardDocumentIcon,
  KeyIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Encrypt() {
  const [message, setMessage] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [result, setResult] = useState("Resultado:");

  function handleOnDoubleClick(e: any) {
    navigator.clipboard.writeText(result);
  }

  function handleOnChange(e: any) {
    setMessage(e.target.value);
  }

  function handleOnChangeKeyPublic(e: any) {
    setPublicKey(e.target.value);
  }

  const getData = async () => {
    const data = await fetch("/api/encrypt", {
      method: "POST",
      body: JSON.stringify({
        message: message,
        publicKey: publicKey,
      }),
    });

    const json = await data.json();

    setResult(json.data.message);
  };

  const getKey = async () => {
    setPublicKey(localStorage.getItem("publicKey") as string);
  };

  return (
    <>
      <Header />
      <div className="m-10 w-auto h-max">
        <textarea
          placeholder="Texto"
          className="w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto"
          id="textEncrypt"
          onChange={handleOnChange}
          value={message}
        />
        <input
          placeholder="Chave sincrona (pública) criptografada"
          className="w-full h-[30px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px] overflow-auto mr-2"
          onChange={handleOnChangeKeyPublic}
          value={publicKey}
        />
      </div>

      <div className="m-10 w-auto h-max flex border-2 border-stone-800 rounded-xl">
        <p
          className="w-full h-[150px] bg-white text-black pl-[10px] rounded-xl"
          onDoubleClick={handleOnDoubleClick}
        >
          {result}
        </p>
        <ClipboardDocumentIcon
          className="w-[30px] h-[30px] ml-[5px] cursor-pointer"
          onClick={handleOnDoubleClick}
        />
      </div>

      <div className="items-center w-full flex place-content-center">
        <div className="items-center w-full flex place-content-center">
          <button
            onClick={getData}
            className={`p-[10px] w-11/12 bg-stone-800 rounded-xl text-white text-lg border-black border-2 flex items-center place-content-center hover:bg-white hover:text-black"`}
          >
            <LockClosedIcon width={50} height={50} className="mr-[10px]" />
            Criptografar{" "}
          </button>
        </div>

        <div className="items-center w-full flex place-content-center">
          <button
            onClick={getKey}
            className={`p-[10px] w-11/12 bg-stone-800 rounded-xl text-white text-lg border-black border-2 flex items-center place-content-center hover:bg-white hover:text-black"`}
          >
            <KeyIcon width={50} height={50} className="mr-[10px]" />
            Preencher chave
          </button>
        </div>
      </div>
    </>
  );
}
