import { NextPage } from 'next';
import React from 'react'

interface Props {
    result: string;
}

const ResultText: NextPage<Props> = (props) => {
    const {result} = props;
    return (
        <div className='m-10 w-auto h-max'>
            <p className='w-full h-60 rounded-xl bg-white border-2 border-stone-800 text-black pb-[200px] pl-[10px]'>{result}</p>
        </div>
    )
}

export default ResultText