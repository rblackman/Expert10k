import { TopMenuTemplateProps } from './topMenuTemplate';

const primary: TopMenuTemplateProps = {
	user: {
		id: '12345',
		name: 'John Doe',
		image: 'https://i.pravatar.cc/150',
		email: 'jdoe@email.com',
		emailVerified: false,
	},
};

const mockLinkTemplateProps = {
	primary,
};

export default mockLinkTemplateProps;
