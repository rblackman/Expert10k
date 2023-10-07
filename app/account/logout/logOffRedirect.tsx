'use client';

import { signOut } from "next-auth/react";
import { useEffect } from 'react';

export default function LogOffRedirect() {
	useEffect(() => {
		signOut({
			callbackUrl: '/',
		})
	}, []);

	return null;
}
