'use client';

import { deleteSkill } from '@actions/skill';
import ButtonTemplate from '@components/templates/button/buttonTemplate';
import { useCallback } from 'react';

interface Props {
	id: number;
	deleteCallback: () => void;
}

export default function DeleteButton({ id, deleteCallback }: Props) {
	const onClick = useCallback(async () => {
		await deleteSkill(id);
		deleteCallback();
	}, [deleteCallback, id]);

	return (
		<ButtonTemplate buttonType="button" onClick={onClick} variant="red" outline>
			Delete
		</ButtonTemplate>
	);
}
