import { ReactNode, Suspense } from 'react';
import styles from './activityListingTemplate.module.css';

export interface ActivityListingTemplateProps {
	name: string;
	time: ReactNode;
	children: ReactNode;
}

export default function ActivityListingTemplate({ name, children, time }: ActivityListingTemplateProps) {
	return (
		<div role="listitem" className={styles.activity}>
			<p className={styles.name}>{name}</p>
			<p className={styles.time}>
				<Suspense fallback={'loading...'}>{time}</Suspense>
			</p>
			<div className={styles.action}>
				<Suspense fallback={''}>{children}</Suspense>
			</div>
		</div>
	);
}
