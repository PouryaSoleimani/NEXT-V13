import { Input } from '@/components/ui/input'
import React from 'react'
import * as Icons from "lucide-react";

type CustomInputPropsType = {
  suffixIcon: keyof typeof Icons
  prefixIcon: keyof typeof Icons
  suffixHandler?: any
}
const CustomInput = (props: React.ComponentProps<'input'> & CustomInputPropsType) => {
  const SuffixIcon = props.suffixIcon ? Icons[props.suffixIcon] : null as any
  const PrefixIcon = props.prefixIcon ? Icons[props.prefixIcon] : null as any

  return (
    <div className='relative inset-0 '>
      {props.prefixIcon && <PrefixIcon className="size-4 text-stone-500 absolute top-2.5 right-1.5" />}
      <Input
        autoComplete={props.autoComplete}
        type={props.type}
        className='px-7'
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        aria-invalid={props['aria-invalid']}
      />
      {props.suffixIcon && <SuffixIcon
        onClick={props.suffixHandler ?? null}
        className="size-4 text-stone-500 absolute top-2.5 left-1.5" />}
    </div>
  )
}

export default CustomInput