import { Input } from '@/components/ui/input'
import React from 'react'
import * as Icons from "lucide-react";

type CustomInputPropsType = {
  suffixIcon: keyof typeof Icons
  prefixIcon: keyof typeof Icons
}
const CustomInput = (props: React.ComponentProps<'input'> & CustomInputPropsType) => {
  const SuffixIcon = props.suffixIcon ? Icons[props.suffixIcon] : null as any
  const PrefixIcon = props.prefixIcon ? Icons[props.prefixIcon] : null as any

  return (
    <div className='relative inset-0 '>
      {props.suffixIcon && <SuffixIcon className="size-4 text-stone-500 absolute top-2 right-1" />}
      <Input
        className='px-7'
        value={props.value}
        onChange={props.onChange}
        placeholder="نام : مثلا محمدرضا"
        aria-invalid={props['aria-invalid']}
      />
      {props.prefixIcon && <PrefixIcon className="size-4 text-stone-500 absolute top-2 left-1" />}
    </div>
  )
}

export default CustomInput