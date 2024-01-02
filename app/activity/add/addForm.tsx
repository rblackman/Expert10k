'use client';
import ButtonTemplate from '@components/templates/button/buttonTemplate';
import TextInputTemplate from '@components/templates/textInput/textInputTemplate';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function AddForm() {
	const router = useRouter();
	const [value, setValue] = useState('');

	const changeCallback = useCallback((v: string) => {
		setValue(v);
	}, []);

	const submitCallback = useCallback(async () => {
		const response = await fetch('/api/activity', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-cache',
			body: JSON.stringify({ name: value }),
		});

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const { id } = (await response.json()) as { id: string };
		router.push(`/activity/${id}`);
	}, [router, value]);

	return (
		<>
			<TextInputTemplate id="name" label="Name" value={value} onChange={changeCallback} />
			<ButtonTemplate buttonType="button" onClick={submitCallback}>
				Submit
			</ButtonTemplate>
		</>
	);
}
