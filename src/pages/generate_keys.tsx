import { ClipboardDocumentIcon, KeyIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Header from "../components/Header";
import Loading from "../components/loading";

export default function GenerateKeys() {
  const [keys, setKeys] = useState({ privateKey: "", publicKey: "" });
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
        keysize: 250,
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

      <div className="m-10 w-auto h-max flex border-2 border-stone-800 rounded-xl">
        <p
          className="w-full h-[150px] bg-white text-black pl-[10px] rounded-xl break-words pr-[30px]"
          onDoubleClick={handleOnDoubleClickKeyPublic}
        >
          {keys.publicKey}
        </p>
        <ClipboardDocumentIcon
          className="w-[30px] h-[30px] ml-[-30px] cursor-pointer"
          onClick={handleOnDoubleClickKeyPublic}
        />
      </div>

      <div className="m-10 w-auto h-max flex border-2 border-stone-800 rounded-xl">
        <p
          className="w-full h-[150px] bg-white text-black pl-[10px] rounded-xl break-words pr-[30px]"
          onDoubleClick={handleOnDoubleClickKeyPrivate}
        >
          {keys.privateKey}
        </p>
        <ClipboardDocumentIcon
          className="w-[30px] h-[30px] ml-[-30px] cursor-pointer"
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
              Carregando...
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
