import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context/AppContext';
import axios from 'axios';

const url = `https://api.unsplash.com/search/photos?client_id=${
	import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
	const { searchWord } = useGlobalContext();
	const response = useQuery({
		queryKey: ['images'],
		queryFn: async () => {
			const result = await axios.get(`url&query=${searchWord}`);
			console.log(result);
		},
	});

	return <h2>Gallery</h2>;
};

export default Gallery;
