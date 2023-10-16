import styled from 'styled-components';

const SearchForm = () => {
	return (
		<Wrapper>
			<h1>Photastic images</h1>
			<form action='' className='searchForm'>
				<input type='text' className='searchInput' />
				<button className='btn'>search</button>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.title {
		color: var(--primary-500);
	}
	.searchForm {
		width: var(--view-width);
		max-width: var(--fixed-width);
		margin: 0 auto;
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr auto;
	}

	.searchInput {
		border-color: var(--grey-300);
		transition: var(--darkModeTransition);
		color: var(--textColor);
		border-radius: 0;

		/* border-right: none; */
	}

	.searchForm .btn {
		border-radius: 0;
	}
	.searchForm .btn:hover {
		background: var(--primary-300);
		color: var(--black);
	}
`;
export default SearchForm;
