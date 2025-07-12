import React from 'react'
import { SonPropsType } from './Father'

const Son: React.FC<SonPropsType> = ({ title, availables, isBlack, theme }) => {

  console.group("%c SON PROPS", 'color: cyan')
  console.info('%c title :', 'color: yellow', title);
  console.info('%c availables :', 'color: yellow ', availables);
  console.info('%c isBlack : ', 'color: yellow', isBlack);
  console.info('%c theme : ', 'color: yellow', theme);
  console.groupEnd()

  return (
    <div>Son</div>
  )
}

export default Son