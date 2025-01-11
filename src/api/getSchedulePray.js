import axios from 'axios';

const getSchedulePray = async () => {
	try {
		const today = new Date();
		const formattedDate = today.toISOString().split('T')[0];

		const response = await axios.get(
			`https://api.myquran.com/v2/sholat/jadwal/1225/${
				formattedDate || '2024-06-23'
			}`,
		);

		return response?.data?.data;
	} catch (e) {
		console.error(e);
	}
};

export default getSchedulePray;
