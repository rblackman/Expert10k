import prisma from '@db/client';

interface Props {
	id: number;
}

const NEVER_STARTED_TEXT = 'Never started, noob';

export default async function ActivityTime({ id }: Props) {
	const sessionTotal = await prisma.practiceSession.groupBy({
		by: ['skillId'],
		_sum: {
			duration: true,
		},
		where: {
			skillId: id,
			duration: { not: null },
		},
	});

	if (sessionTotal.length === 0) {
		return NEVER_STARTED_TEXT;
	}

	const totalMinutes = sessionTotal[0]._sum.duration;

	if (!totalMinutes) {
		return NEVER_STARTED_TEXT;
	}

	return (
		<>
			{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
		</>
	);
}
