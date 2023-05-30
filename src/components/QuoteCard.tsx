import React, { ReactNode } from 'react'
import { Content } from './Content'

export const QuoteCard = (props: { children: ReactNode }) => {
  return (
    <div className='flex flex-col p-5 max-w min-h-full bg-gray-700 rounded-md leading-relaxed'>
      {props.children}
    </div>
  )
}
