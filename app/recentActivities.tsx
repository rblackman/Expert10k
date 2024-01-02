import ActivityListingTemplate from '@components/templates/activityListing/activityListingTemplate';
import prisma from '@db/client';
import User from "@t/user";
import ActivityAction from './activityAction';
import ActivityTime from './activityTime';

interface Props {
	user: User;
}

export default async function RecentActivities({ user: { id } }: Props) {
	const queryResult = await prisma.practiceSession.findMany({
		where: {
			skill: {
				userId: id
			}
		},
		select: {
			skill: true
		},
		orderBy: {
			startTime: 'desc'
		},
		take: 5
	});
	const skills = queryResult.map(({ skill }) => skill);

	if (skills.length === 0) {
		return (
			<p>No recent activities, noob</p>
		);
	}

	return (
		<div role="list">
			{skills.map(({ id, name }) => (
				<ActivityListingTemplate key={id} name={name} time={<ActivityTime id={id} />}>
					<ActivityAction id={id} />
				</ActivityListingTemplate>
			))}
		</div>
	);
}
