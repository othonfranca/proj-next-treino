'use client'

import { AllQuotes, Quote } from '@/interface/AllQuotes';
import React, { FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function Home() {

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

  // const singleQuote = await fetch(`https://dummyjson.com/quotes/1`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     return data as Quote
  //   })



  console.log(txtAuthor)



  return (
    <>
      <form className='flex gap-4 relative p-3' >
        <input onChange={(event) => {
          setTxtAuthor(event.target.value)
        }} value={txtAuthor} type="text" name="textoAutor" id="textoAutor" className='text-black p-1.5' placeholder='Digite o autor...' />
        <button className='bg-green-400 text-black flex flex-column relative items-center p-1 rounded-md' type='submit'>Pesquisar</button>
      </form>
      <div className='flex flex-col p-3 items-center gap-6 bg-gray-800'>
        {allQuotes.map((quote, index) => {
          index = quote.id
          return (
            <div key={index} className='flex flex-col gap-1 max-w-fit bg-gray-700 rounded-md'><p className='p-2'>"{quote.quote}"</p>
              <p className='pl-2 pb-2'>{quote.author}</p>
              <div className='flex flex-col pr-4 pb-4'><button className='bg-green-400 text-black flex flex-column relative items-center self-end p-2 rounded-full'>Favoritar</button></div></div>
          )

        })}
      </div>
    </>
  )

}

// <div className='p-3 flex flex-col justify-center bg-gray-500'>
// {allQuotes.quotes.map((quote) => {
//   return <div key={quote.id}>{quote.author}</div>
// })}
// </div>







