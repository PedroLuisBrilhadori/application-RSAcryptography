import { NextPage } from 'next';
import React from 'react'

interface Props {
    label: string;
}

const TextField: NextPage<Props> = (props) => {
const { label } = props;
  return (
    <input type='text' placeholder={label} />
  )
}

export default TextField;