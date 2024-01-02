import prisma from '@db/client';
import { authOptions } from '@helpers/auth';
import { getServerSession } from 'next-auth/next';
import Skill from './skill';

export default async function SkillList() {
	const auth = await getServerSession(authOptions);

	const prismaUser = await prisma.user.findUnique({
		where: { email: auth?.user?.email ?? '' },
		include: { skills: true },
	});

	if (prismaUser === null) {
		return null;
	}

	const filteredSkills = prismaUser.skills.filter(({ deleted }) => !deleted);

	if (filteredSkills.length === 0) {
		return <p>No skill, noob</p>;
	}

	return (
		<ul>
			{filteredSkills.map(({ id, name, hours }) => (
				<Skill key={id} id={id} name={name} hours={hours} />
			))}
		</ul>
	);
}
