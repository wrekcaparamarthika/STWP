import axios from 'axios';

export async function fetchData(url: string) {
	try {
		const data = await axios.get(url);
		return data.data;
	} catch (error) {
		console.error(error);
		return;
	}
}
