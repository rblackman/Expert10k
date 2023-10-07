'use client';

import ButtonTemplate from "@components/templates/button/buttonTemplate";

export default function LoginButton() {
	return (
		<ButtonTemplate href="/api/auth/signin">
			Login
		</ButtonTemplate>
	);
};
