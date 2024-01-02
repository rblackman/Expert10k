/* eslint-disable @next/next/no-img-element */
import User from "@t/user";
import { MdLogout } from 'react-icons/md';
import IconButtonTemplate from "../iconButton/iconButtonTemplate";
import styles from './topMenuTemplate.module.css';

export interface TopMenuTemplateProps {
	user: User;
}

export default function TopMenuTemplate({ user: { name, image } }: TopMenuTemplateProps) {
	const text = name ? `Hi, ${name.split(' ')[0]}!` : 'Hi there!';

	return (
		<header id="top-menu" className={styles.menu}>
			<div className={styles.innerMenu}>
				{image && <img className={styles.photo} src={image} alt={`Image of ${name}`} width={30} height={30} />}
				<p className={styles.name}>{text}</p>
				<div className={styles.actions}>
					<IconButtonTemplate href="/account/logout" label="Logout" variant="secondary" blank>
						<MdLogout />
					</IconButtonTemplate>
				</div>
			</div>
		</header>
	);
}
