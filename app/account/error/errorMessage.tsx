'use client';

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function ErrorMessage() {

	const query = useSearchParams();
	const error = query.get('error');
	const errorMessage = useMemo(() => {
		switch (error) {
			case 'Configuration':
				return 'Configuration error with the app.';
			case 'AccessDenied':
				return "You don't have access to this page.";
			case 'Verification':
				return 'This verification token has expired or has already been used.';
			default:
				return 'An error occurred.';
		}
	}, [error]);

	return <p>{errorMessage}</p>;
}
