import { RestAuth } from '@/src/components/auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

export const options = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'username',
				},
				password: {
					label: 'password',
					type: 'password',
					placeholder: '*****',
				},
			},
			authorize: async (credentials) => {
				try {
					const response = await fetch(`http://localhost:8888/auth/login/`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(credentials),
					});
					if (response.ok) {
						const user = response.data;
						sessionStorage.setItem('user', JSON.stringify(user));
						return Promise.resolve(user);
					} else {
						console.error('Authentication failed:', response.data.error);
						return Promise.resolve(null);
					}
				} catch (error) {
					console.error('Error authenticating user:', error);
					return Promise.resolve(null);
				}
			},
		}),
	],
};
