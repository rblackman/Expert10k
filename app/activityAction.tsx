import IconButtonTemplate from '@components/templates/iconButton/iconButtonTemplate';
import prisma from '@db/client';
import { GrPlay, GrResume } from 'react-icons/gr';

interface Props {
	id: number;
}

export default async function ActivityAction({ id }: Props) {
	const openSessions = await prisma.practiceSession.findFirst({
		where: {
			skillId: id,
			endTime: null
		}
	});

	if (openSessions) {
		return (
			<IconButtonTemplate href={`/session/${id}`} label="Resume" blank>
				<GrResume />
			</IconButtonTemplate>
		);
	}

	return (
		<IconButtonTemplate href={`/session/start/${id}`} label="Start" blank>
			<GrPlay />
		</IconButtonTemplate>
	);
}
