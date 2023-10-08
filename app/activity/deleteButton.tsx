'use client';

import ButtonTemplate from "@components/templates/button/buttonTemplate";
import { useCallback } from "react";

interface Props {
	id: number;
	deleteCallback: () => void;
}

export default function DeleteButton({ id, deleteCallback }: Props) {
	const onClick = useCallback(async () => {
		const response = await fetch('/api/activity', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-cache',
			body: JSON.stringify({ id }),
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		await response.json() as { id: string };
		deleteCallback();
	}, [deleteCallback, id]);

	return (
		<ButtonTemplate buttonType="button" onClick={onClick} variant="red" outline>Delete</ButtonTemplate>
	);

}
