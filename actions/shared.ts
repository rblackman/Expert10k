import prisma from "@db/client";
import { authOptions } from "@helpers/auth";
import throwError from "@helpers/throwError";
import { getServerSession } from "next-auth/next";

export async function getUser(includeSkills: boolean = false): Promise<{
	id: string;
	email: string | null;
	name: string | null;
	image: string | null;
	skills: {
		id: number;
		userId: string;
		name: string;
		hours: number;
		deleted: boolean;
	}[]
}> {
	const auth = await getServerSession(authOptions);

	const prismaUser = await prisma.user.findUnique({
		where: { email: auth?.user?.email ?? '' },
		include: { skills: includeSkills },
	});

	if (prismaUser === null) {
		throwError('User not found');
	}

	return prismaUser;
}
