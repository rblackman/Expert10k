import prisma from '@db/client';
import { authOptions } from '@helpers/auth';
import { getServerSession } from "next-auth/next";
import HomepageRecoilRoot from './homepageRecoilRoot';
import LoginButton from './loginButton';

export default async function Home() {
	const auth = await getServerSession(authOptions);
	const skills = await prisma.skill.findMany();
	const text = auth?.user ? `Hi ${auth.user.name}` : 'No Login';

	return (
		<HomepageRecoilRoot>
			<h1>{text}</h1>
			{skills.map(({ id, name, hours }) => (
				<div key={id}>
					<h1>{name} ({id})</h1>
					<p>{hours}</p>
				</div>
			)
			)}
			<LoginButton />
		</HomepageRecoilRoot>
	);
}
