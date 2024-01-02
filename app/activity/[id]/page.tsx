import { getSkill } from '@actions/skill';

interface Props {
	params: {
		id: string;
	}
}

export default async function Page({ params: { id } }: Props) {
	console.log('id', id);
	const { name } = await getSkill(id);


	return <h2>Activity: {name}</h2>;
}
