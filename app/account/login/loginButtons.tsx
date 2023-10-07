import LoginButton from "./loginButton";

interface Props {
	providers: {
		id: string;
		name: string;
	}[];
}

export default function LoginButtons({ providers }: Props) {
	return (
		<div>
			{providers.map(({ id, name }) => (
				<LoginButton key={id} id={id} name={name} />
			))}
		</div>
	);

}
