import clsx from "clsx";
import { ReactNode } from "react";
import styles from './iconButtonTemplate.module.css';

export interface IconButtonTemplateProps {
	children: ReactNode;
	label: string;
	onClick: () => void;
	animate?: boolean;
	iconSize?: 'small' | 'medium' | 'large';
	variant?: 'primary' | 'secondary' | 'danger';
	outline?: boolean;
	disabled?: boolean;
}

export default function IconButtonTemplate({ animate, iconSize, variant, outline, disabled, children, label, onClick }: IconButtonTemplateProps) {

	const buttonClassName = clsx({
		[styles.button]: true,
		[styles.animate]: animate ?? false,
		[styles[iconSize ?? 'medium']]: true,
		[styles[variant ?? 'primary']]: true,
		[styles.outline]: outline ?? false,
	});

	return (
		<button
			className={buttonClassName}
			onClick={onClick}
			disabled={disabled ?? false}
			aria-label={label}
			title={label}
		>
			{children}
		</button>
	);
}
