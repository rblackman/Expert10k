'use client';

import { ChangeEvent, useCallback } from 'react';
import styles from './textInputTemplate.module.css';

export interface TextInputTemplateProps {
	id: string;
	label: string;
	value: string;
	onChange: (_text: string) => void;
	required?: true;
}

export default function TextInputTemplate({
	id,
	label,
	value,
	onChange: changeCallback,
	...props
}: TextInputTemplateProps) {
	const onChange = useCallback(
		({ target: { value } }: ChangeEvent<HTMLInputElement>) => changeCallback(value),
		[changeCallback],
	);

	return (
		<div className={styles.wrapper}>
			<label htmlFor={id} className={styles.label}>
				{label}
			</label>
			<input id={id} type="text" required value={value} onChange={onChange} {...props} />
		</div>
	);
}

TextInputTemplate.defaultProps = {
	required: undefined,
};
