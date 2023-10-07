import prisma from '../lib/prisma';
import HomepageRecoilRoot from './homepageRecoilRoot';

export default async function Home() {
	const skills = await prisma.skill.findMany();

	return (
		<HomepageRecoilRoot>
			{skills.map(({ id, name, hours }) => (
				<div key={id}>
					<h1>{name} ({id})</h1>
					<p>{hours}</p>
				</div>
			)
			)}
		</HomepageRecoilRoot>
	);
}
