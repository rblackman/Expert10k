import TopMenuTemplate from '@components/templates/topMenu/topMenuTemplate';
import User from '@t/user';
import { ReactNode } from 'react';

export interface PrimaryLayoutProps {
	user: User;
	children: ReactNode;
}

export default function PrimaryLayout({ user, children }: PrimaryLayoutProps) {
	return (
		<>
			<TopMenuTemplate user={user} />
			<main>{children}</main>
		</>
	);
}
