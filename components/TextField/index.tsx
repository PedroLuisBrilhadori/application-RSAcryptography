import { NextPage } from 'next';
import React, { useEffect, useState } from 'react'

interface Props {
    label: string;
    id: string;
}

const TextField: NextPage<Props> = (props) => {
    const { label, id } = props;

    return (
        <div className='m-10 w-auto h-max'>
            <input type='text' placeholder={label} className='w-full h-60 rounded-xl bg-white border-2 border-stone-800 text-black pb-[200px] pl-[10px]' id={id}  />
        </div>
    )
}

export default TextField;