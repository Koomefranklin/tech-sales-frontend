import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				UserName: {
					label: 'Username',
					type: 'text',
					placeholder: 'username',
				},
				Password: {
					label: 'password',
					type: 'password',
					placeholder: '*****',
				},
			},
			async authorize(credentials) {
				const user = {
					id: '1',
					username: 'koomef',
					password: '1Password',
				};

				if (
					credentials?.UserName === user.username &&
					credentials?.Password === user.password
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};
