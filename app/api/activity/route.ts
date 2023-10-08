import prisma from '@db/client';
import { authOptions } from '@helpers/auth';
import { getServerSession } from "next-auth/next";

export const dynamic = 'force-dynamic';

async function POST(request: Request) {
	const { name } = await request.json() as { name: string };

	const auth = await getServerSession(authOptions);

	const prismaUser = await prisma.user.findUnique({
		where: { email: auth?.user?.email ?? '' },
		include: { skills: true }
	});

	if (prismaUser === null) {
		return Response.error();
	}

	const record = await prisma.skill.create({
		data: { name, userId: prismaUser.id, hours: 10000 }
	});

	return Response.json(record);
}

async function DELETE(request: Request) {
	const { id } = await request.json() as { id: string };
	const auth = await getServerSession(authOptions);

	const prismaUser = await prisma.user.findUnique({
		where: { email: auth?.user?.email ?? '' },
		include: { skills: true }
	});

	if (prismaUser === null) {
		return Response.error();
	}

	const { id: skillId } = prismaUser.skills.filter(({ id }) => id === id)[0];

	const updated = await prisma.skill.update({
		where: { id: skillId },
		data: { deleted: true }
	})

	return Response.json(updated);
}

export { DELETE, POST };

