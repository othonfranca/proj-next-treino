import { Quote } from '@/interface/AllQuotes'
import React from 'react'

export const Content = (props: { quote: Quote }) => {
  return (
    <div>
      <p className='p-2'>"{props.quote.quote}"</p>
      <p className='pl-2 pb-2'>{props.quote.author}</p>
    </div>
  )
}
