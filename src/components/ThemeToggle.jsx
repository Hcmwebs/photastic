import styled from 'styled-components';
import { useGlobalContext } from '../context/AppContext';
import { FaMoon, FaSun } from 'react-icons/fa';
const ThemeToggle = () => {
	const { isDarkTheme, toggleTheme } = useGlobalContext();
	return (
		<Wrapper className='toggleContainer'>
			<button className='toggleBtn' onClick={toggleTheme}>
				{isDarkTheme ? (
					<FaSun className='toggleIcon' />
				) : (
					<FaMoon className='toggleIcon' />
				)}
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	&.toggleContainer {
		width: min(var(view-width), var(--max-width));
		padding: 1rem 0;
		display: flex;
		justify-content: end;
	}

	.toggleBtn {
		background: transparent;
		border-color: transparent;
		width: 5rem;
		height: 2rem;
		display: grid;
		place-items: center;
		cursor: pointer;
	}

	.toggleIcon {
		font-size: 1.5rem;
		color: var(--textColor);
	}
`;
export default ThemeToggle;
