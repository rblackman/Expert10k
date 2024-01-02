import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './iconButtonTemplate.module.css';

export interface BaseButtonTemplateProps {
	children: ReactNode;
	label: string;
	animate?: boolean;
	iconSize?: 'small' | 'medium' | 'large';
	variant?: 'primary' | 'secondary' | 'danger';
	outline?: boolean;
	blank?: boolean;
	disabled?: boolean;
}

export interface ButtonIconButtonTemplateProps extends BaseButtonTemplateProps {
	onClick: () => void;
}

export interface LinkIconButtonTemplateProps extends BaseButtonTemplateProps {
	href: string;
}

export type IconButtonTemplateProps = ButtonIconButtonTemplateProps | LinkIconButtonTemplateProps;

function isLinkButton(props: IconButtonTemplateProps): props is LinkIconButtonTemplateProps {
	return typeof (props as LinkIconButtonTemplateProps)?.href === 'string';
}

export default function IconButtonTemplate(props: IconButtonTemplateProps) {
	const { animate, iconSize, variant, outline, disabled, blank, children, label } = props;
	const buttonClassName = clsx({
		[styles.button]: true,
		[styles.animate]: animate ?? false,
		[styles[iconSize ?? 'medium']]: true,
		[styles[variant ?? 'primary']]: true,
		[styles.outline]: outline ?? false,
		[styles.disabled]: disabled ?? false,
		[styles.blank]: blank ?? false,
	});

	if (isLinkButton(props)) {
		const { href } = props;
		return (
			<a href={href} className={buttonClassName} aria-label={label} title={label}>
				{children}
			</a>
		);
	}

	const { onClick } = props;
	return (
		<button className={buttonClassName} onClick={onClick} disabled={disabled ?? false} aria-label={label} title={label}>
			{children}
		</button>
	);
}
