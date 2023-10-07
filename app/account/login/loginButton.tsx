'use client';

import ButtonTemplate from "@components/templates/button/buttonTemplate";
import { signIn } from "next-auth/react";
import { useCallback } from "react";

interface Props {
	id: string;
	name: string;
}

export default function LoginButton({ id, name }: Props) {
	const login = useCallback(() => {
		signIn(id, {
			callbackUrl: '/',
		});
	}, [id]);

	return (
		<ButtonTemplate buttonType="button" callback={login}>
			Login with {name}
		</ButtonTemplate>
	);
}
