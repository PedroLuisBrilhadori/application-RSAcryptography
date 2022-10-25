import { NextPage } from 'next';
import React from 'react'

interface Props {
    result: string;
    id: string;
}

const ResultText: NextPage<Props> = (props) => {
    const {result, id} = props;

    function handleOnDoubleClick(e: any){    
        navigator.clipboard.writeText(result)
    }

    return (
        <div className='m-10 w-auto h-max flex'>
            <p className='w-full h-[150px] rounded-xl bg-white border-2 border-stone-800 text-black pl-[10px]' id={id} onDoubleClick={handleOnDoubleClick}>{result}</p>
            <img src='' />
        </div>
    )
}

export default ResultText