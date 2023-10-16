import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context/AppContext';
import axios from 'axios';
import styled from 'styled-components';

const url = `https://api.unsplash.com/search/photos?client_id=${
	import.meta.env.VITE_API_KEY
}`;
console.log(import.meta.env.VITE_API_KEY);
const Gallery = () => {
	const { searchWord } = useGlobalContext();
	const response = useQuery({
		queryKey: ['images', searchWord],
		queryFn: async () => {
			const result = await axios.get(`${url}&query=${searchWord}`);
			return result.data;
		},
	});

	if (response.isLoading) {
		return (
			<section className='image-container'>
				<h4>Loading...</h4>
			</section>
		);
	}
	if (response.isError) {
		return (
			<section className='image-container'>
				<h4>There was and error ...</h4>
			</section>
		);
	}
	const results = response.data.results;
	if (results.length < 1) {
		return (
			<section className='image-container'>
				<h4>No results found ...</h4>
			</section>
		);
	}

	return (
		<Wrapper className='imageContainer'>
			{results.map((item) => {
				const { alt_description, id } = item;
				const url = item?.urls?.regular;

				return <img key={id} src={url} alt={alt_description} className='img' />;
			})}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	&.imageContainer {
		width: min(var(--view-width), var(--max-width));
		margin: 3rem auto;
		display: grid;
		gap: 2rem;
		.img {
			height: 10rem;
		}
		@media (min-width: 768px) {
			&.imageContainer {
				grid-template-columns: 1fr 1fr;
			}
		}
		@media (min-width: 992px) {
			&.imageContainer {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}
	}
`;

export default Gallery;
