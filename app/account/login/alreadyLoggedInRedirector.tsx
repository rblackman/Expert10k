'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
	user: {
		name?: string | null
		email?: string | null
		image?: string | null
	} | null;
}

export default function AlreadyLoggedInRedirector({ user }: Props) {
	const router = useRouter();
	useEffect(() => {
		if (user) {
			router.push('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router]);

	return null;
}
