'use client';

import { useCallback, useState } from 'react';
import DeleteButton from './deleteButton';

interface Props {
	id: number;
	name: string;
	hours: number;
}

export default function Skill({ id, name, hours }: Props) {
	const [deleted, setDeleted] = useState(false);
	const deleteCallback = useCallback(() => setDeleted(true), []);

	if (deleted) {
		return null;
	}

	return (
		<li>
			<span>{name}</span> | <span>{hours}</span>
			<DeleteButton id={id} deleteCallback={deleteCallback} />
		</li>
	);
}
