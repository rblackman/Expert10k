import PrimaryLayout from '@components/layouts/primary/primaryLayout';
import LoginRedirector from '@components/loginRedirector';
import prisma from '@db/client';
import { authOptions } from '@helpers/auth';
import toUser from '@helpers/toUser';
import { getServerSession } from "next-auth/next";
import RecentActivities from './recentActivities';

export default async function Home() {
	const auth = await getServerSession(authOptions);
	const prismaUser = await prisma.user.findUnique({ where: { email: auth?.user?.email ?? '' } });
	const user = toUser(prismaUser);

	if (!user) {
		return <LoginRedirector />;
	}

	return (
		<PrimaryLayout user={user}>
			<h1 className='sr'>Home</h1>
			<h2>Recent Activities</h2>
			<RecentActivities user={user} />
		</PrimaryLayout>
	);
}
