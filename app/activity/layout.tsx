import PrimaryLayout from '@components/layouts/primary/primaryLayout';
import LoginRedirector from '@components/loginRedirector';
import prisma from '@db/client';
import { authOptions } from '@helpers/auth';
import toUser from '@helpers/toUser';
import { getServerSession } from "next-auth/next";
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default async function Layout({ children }: Props) {
	const auth = await getServerSession(authOptions);
	const prismaUser = await prisma.user.findUnique({ where: { email: auth?.user?.email ?? '' } });
	const user = toUser(prismaUser);

	if (!user) {
		return <LoginRedirector />;
	}

	return (
		<PrimaryLayout user={user}>
			<h1>Activities</h1>
			{children}
		</PrimaryLayout>
	);
}
