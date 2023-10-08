import ButtonTemplate from '@components/templates/button/buttonTemplate';
import SkillList from './skillList';

export default async function Page() {
	return <>
		<SkillList />
		<ButtonTemplate href="/activity/add">Create Activity</ButtonTemplate>
	</>

}
