'use client'

import { Copyright } from '@/components/Copyright';

import Link from 'next/link';
import React from "react";


export default function Home() {

  return (

    <div className='flex min-h-screen justify-between flex-col items-center'>
      <div><p>ALGUMA COISA</p></div>
      <div className='flex flex-col gap-4 '>
        <div><Link className='flex rounded-full px-3 py-2 text-gray-900 bg-green-500 hover:bg-green-600' href="/allQuotes">Todas as frases</Link></div>
        <div className='flex justify-center'><Link className='flex rounded-full px-3 py-2 text-gray-900 bg-green-500 hover:bg-green-600' href="/favorites">Favoritos</Link></div>
      </div>
      <div className=''><Copyright /></div>
    </div>
  )

}







