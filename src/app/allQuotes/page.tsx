'use client'

import { Copyright } from '@/components/Copyright';
import { FavoritesContext } from '@/contexts/favoritosCtx';
import { AllQuotes, Quote } from '@/interface/AllQuotes';
import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { cookies } from 'next/headers'
import Link from 'next/link';

export default function Home() {

  const myContext = useContext(FavoritesContext)

  const [txtAuthor, setTxtAuthor] = useState("")
  const [allQuotes, setAllQuotes] = useState<Quote[]>([])



  useEffect(() => {
    async function handleFetch() {
      const allQuotes = await fetch('https://dummyjson.com/quotes?limit=100')
        .then(res => res.json())
        .then((data: AllQuotes) => {
          return data.quotes as Quote[]
        })

      setAllQuotes(allQuotes)
    }

    handleFetch()
  }, [])

  console.log(txtAuthor)


  const filteredQuotes = allQuotes.filter((filter) => {
    return (
      filter.author.toLowerCase().includes(txtAuthor.toLowerCase())
    )
  })

  console.log("MYCONTEXTFAVORITO", myContext.favorites);


  return (

    <>
      <form className='flex justify-between relative p-3 ' >
        <div>
          <input onChange={(event) => {
            setTxtAuthor(event.target.value)
          }} value={txtAuthor} type="text" name="textoAutor" id="textoAutor" className='text-black p-1.5' placeholder='Pesquisar por autor...' />
        </div>
        <div className='flex gap-4 '>
          <Link href="../" className=' bg-green-400 hover:bg-green-700 rounded-md text-black p-2' >Home</Link>
          <Link href="../favorites" className=' bg-green-400 hover:bg-green-700 rounded-md text-black p-2' >Favoritos</Link>
        </div>

      </form>



      <div className='grid grid-cols-3 p-10 items-center justify-center gap-10 bg-gray-800'>

        {filteredQuotes.length > 0 ? filteredQuotes.map((quote, index) => {
          index = quote.id
          return (
            <div key={index} className='flex flex-col p-5 max-w min-h-full bg-gray-700 rounded-md leading-relaxed'>
              <div>
                <p className='p-2'>"{quote.quote}"</p>
                <p className='pl-2 pb-2'>{quote.author}</p>
              </div>
              <button className='bg-green-400 mt-auto self-end hover:bg-green-600 text-black  p-2 rounded-full ' onClick={() => { myContext.addToFavorites(quote) }} >Favoritar</button>
            </div>
          )

        }) : allQuotes.map((quote, index) => { //FAÇO UM IF ANTES PARA MOSTRAR OU O FILTRO OU TODAS?
          index = quote.id
          return (
            <div key={index} className='flex flex-col p-5 max-w min-h-full bg-gray-700 rounded-md leading-relaxed'>
              <div>
                <p className='p-2'>"{quote.quote}"</p>
                <p className='pl-2 pb-2'>{quote.author}</p>
              </div>
              <button className='bg-green-400 mt-auto self-end hover:bg-green-600 text-black  p-2 rounded-full ' onClick={() => { myContext.addToFavorites(quote) }}>Favoritar</button>
            </div>
          )

        })}
      </div>
      <Copyright />

    </>

  )


}






