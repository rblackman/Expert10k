'use client';
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

// this component is a quick way to redirect to the login page
// useful if the user object is null
export default function LoginRedirector() {
	const router = useRouter();
	const pathname = usePathname();
	useEffect(() => {
		router.push(`/account/login?callbackUrl=${pathname}`)
	}, [pathname, router]);


	return null;
}
