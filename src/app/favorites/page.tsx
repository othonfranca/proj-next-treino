'use client'

import { FavoritesContext } from '@/contexts/favoritosCtx'
import React, { useContext } from 'react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Content } from '@/components/Content'
import { Quote } from '@/interface/AllQuotes'
import { QuoteCard } from '@/components/QuoteCard'

const Favorites = () => {

  const myContext = useContext(FavoritesContext)
  console.log(myContext.favorites);

  return (
    <div className='flex flex-col gap-5 p-5'>{myContext.favorites.map((quote: Quote, index: any) => {
      index = quote.id
      return (

        <QuoteCard key={index}>
          <Content quote={quote} />
          <button className='bg-green-400 mt-auto self-end hover:bg-green-600 text-black  p-2 rounded-full ' onClick={() => { myContext.addToFavorites(quote) }} >Favoritar</button>
        </QuoteCard>

      )

    })}</div>
  )
}

export default Favorites