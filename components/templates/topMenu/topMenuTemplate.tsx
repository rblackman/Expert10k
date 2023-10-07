/* eslint-disable @next/next/no-img-element */
import User from "@t/user";
import styles from './topMenuTemplate.module.css';

export interface TopMenuTemplateProps {
	user: User;
}

export default function TopMenuTemplate({ user: { name, image } }: TopMenuTemplateProps) {
	const text = name ? `Hi, ${name}!` : 'Hi there!';

	return (
		<header id="top-menu" className={styles.menu}>
			<div className={styles.innerMenu}>
				<h1 className={styles.name}>{text}</h1>
				{image && <img className={styles.photo} src={image} alt={`Image of ${name}`} width={30} height={30} />}
			</div>
		</header>
	);
}
