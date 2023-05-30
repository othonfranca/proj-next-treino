import { Quote } from '@/interface/AllQuotes'
import { ReactNode, createContext, useContext, useState } from 'react'

export const FavoritesContext = createContext({} as any)

export const FavoritosProvider = ({ children }: { children: ReactNode }) => {

  const [favorites, setFavorites] = useState<Quote[]>([])

  function addToFavorites(quote: Quote) {
    setFavorites([
      ...favorites,
      quote
    ])
  }

  return (

    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}</FavoritesContext.Provider>
  )
}