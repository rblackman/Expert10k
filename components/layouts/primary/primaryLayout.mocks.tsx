import { PrimaryLayoutProps } from './primaryLayout';

const primary: PrimaryLayoutProps = {
	children: (
		<>
			<h1>Hello World! (h1)</h1>
			<h2>Sub Heading! (h2)</h2>
			<p>
				Lorem ipsum doler sit.
			</p>
		</>
	),
	user: {
		id: '12345',
		name: 'John Doe',
		image: 'https://i.pravatar.cc/150',
		email: 'jdoe@email.com',
		emailVerified: false
	}
};

const mockPrimaryLayoutProps = {
	primary
};

export default mockPrimaryLayoutProps;
