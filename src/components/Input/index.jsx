import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer,ErroText, InputText, IconContainer } from './styles';

const Input = ({leftIcon, name, control,errorMessage, ...rest}) => {


  return (
    <>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{required:true}}
        render={({ field }) =>  <InputText {...field} {...rest} />}
      />
       
    </InputContainer>
    {errorMessage ?<ErroText></ErroText> : null}
    </>
  )
}

export { Input }; 
