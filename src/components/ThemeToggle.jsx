import { useGlobalContext } from '../context/AppContext'

const ThemeToggle = () => {
	const{isDarkTheme, setSearchWord, toggleTheme} = useGlobalContext()
	return ( 
	<div className="toggleContainer">
		<button className="toggleBtn">
			button
		</button>
	</div>
	)
}

export default ThemeToggle
