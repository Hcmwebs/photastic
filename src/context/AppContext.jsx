import { createContext, useContext,useEffect,useState } from 'react'


const AppContext = createContext()
const AppProvider = ({children}) => {
  const greetings = 'Jambo World!!'
  return (
    <AppContext.Provider value = {{greetings}}>{children}</AppContext.Provider>
  )
}
const useGlobalContext = () => useContext(AppContext)

export {AppProvider, useGlobalContext}