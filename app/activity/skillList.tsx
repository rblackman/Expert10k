import prisma from '@db/client';
import { authOptions } from '@helpers/auth';
import { getServerSession } from "next-auth/next";

export default async function SkillList() {
	const auth = await getServerSession(authOptions);

	const prismaUser = await prisma.user.findUnique({
		where: { email: auth?.user?.email ?? '' },
		include: { skills: true }
	});

	if (prismaUser === null) {
		return null;
	}

	if (prismaUser.skills.length === 0) {
		return <p>No skill, noob</p>
	}

	return (
		<ul>
			{prismaUser.skills.map(({ id, name }) => (<li key={id}>{name}</li>))}
		</ul>
	);
}
