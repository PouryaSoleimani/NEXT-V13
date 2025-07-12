import React from 'react'
import Son from './Son'
import { SonsProps } from '../fakeDatas'


export interface SonPropsType {
  title: string,
  availables: Array<number>
  isBlack: boolean,
  theme: 'DARK' | 'LIGHT'
}





const Father = () => {
  return (
    <div>
      FATHER COMPONENT
      <Son {...SonsProps} />
    </div>
  )
}

export default Father