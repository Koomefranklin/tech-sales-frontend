import axios from 'axios';

export async function RestAuth(credentials) {
	const api = process.env.NEXT_PUBLIC_API_SERVER;
	try {
		const response = await axios.post(`${api}/auth/login/`, credentials);
		const user = response.data;
		return user;
	} catch (error) {
		console.error('Authentication failed:', error);
		return null;
	}
}
