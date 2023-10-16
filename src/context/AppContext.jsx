import { createContext, useContext,useEffect,useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () =>{
  const preferDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
  const storedDarkMode =localStorage.getItem('darkTheme') === 'true'

  return storedDarkMode || preferDarkMode

} 
const AppProvider = ({children}) => {
const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
const [searchWord,setSearchWord] = useState('cat')

const toggleTheme = () =>{
  const newDarkTheme = !isDarkTheme
  setIsDarkTheme(newDarkTheme)
  localStorage.setItem('darkTheme',newDarkTheme)
}

useEffect(() =>{
document.body.classList.toggle('dark-theme', isDarkTheme)

},[isDarkTheme])

  return (
    <AppContext.Provider value = {{isDarkTheme,toggleTheme, searchWord,setSearchWord}}>{children}</AppContext.Provider>
  )
}
const useGlobalContext = () => useContext(AppContext)

export {AppProvider, useGlobalContext}