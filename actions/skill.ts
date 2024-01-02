'use server';

import { getUser } from '@actions/shared';
import prisma from '@db/client';
import throwError from '@helpers/throwError';



export async function createSkill(name: string, hours: number = 10_000): Promise<{
	id: number;
	userId: string;
	name: string;
	hours: number;
	deleted: boolean;
}> {
	const { id: userId } = await getUser();

	const record = await prisma.skill.create({
		data: { name, userId, hours },
	});

	return record;
}

export async function deleteSkill(id: number): Promise<void> {
	const { skills } = await getUser(true);
	const { id: skillId } = skills.filter(({ id: skillId }) => skillId === id)[0];

	await prisma.skill.update({
		where: { id: skillId },
		data: { deleted: true },
	});
}

export async function getSkill(id: string): Promise<{
	id: number;
	userId: string;
	name: string;
	hours: number;
	deleted: boolean;
}> {
	const { id: userId } = await getUser();

	const record = await prisma.skill.findUnique({
		where: { id: parseInt(id), userId },
	});

	if (record === null) {
		throwError('Skill not found');
	}

	return record;
}
