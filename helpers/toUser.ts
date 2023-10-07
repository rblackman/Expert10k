import User from "@t/user";

export default function toUser(user: {
	id: string;
	name: string | null;
	email: string | null;
	emailVerified: Date | null;
	image: string | null;
} | null): User | null {

	if (!user) {
		return null;
	}

	const { id, name, email, emailVerified, image } = user;

	return {
		id,
		name: name || null,
		email: email || null,
		emailVerified: !!emailVerified,
		image: image || null,
	};
}
