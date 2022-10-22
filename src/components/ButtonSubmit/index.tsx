import { NextPage } from 'next';
import React from 'react'

interface Props {
    text: String;
}

const ButtonSubmit: NextPage<Props> = (props) => {
    const {text} = props;

    return (
        <div className='items-center w-full text-center'>
            <button type='submit' className='self-center text-center bg-stone-800 w-11/12 rounded-xl text-white text-lg p-[5px] border-black border-2'>{text}</button>
        </div>
    )
}

export default ButtonSubmit;