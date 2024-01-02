import { authOptions } from '@helpers/auth';
import { getServerSession } from 'next-auth/next';
import AlreadyLoggedInRedirector from './alreadyLoggedInRedirector';

import { getProviders } from 'next-auth/react';
import LoginButtons from './loginButtons';

export default async function LoginPage() {
	const auth = await getServerSession(authOptions);
	const user = auth?.user ?? null;

	const providers = await getProviders();
	if (providers === null) {
		return null;
	}
	const parsedProviders = Object.values(providers).map(({ id, name }) => ({ id, name }));

	return (
		<>
			<h1>Login</h1>
			<AlreadyLoggedInRedirector user={user} />
			<LoginButtons providers={parsedProviders} />
		</>
	);
}
