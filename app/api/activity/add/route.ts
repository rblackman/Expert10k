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

export { POST };

