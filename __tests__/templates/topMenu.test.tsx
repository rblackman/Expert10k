import TopMenu, { shortenName } from '@components/templates/topMenu/topMenuTemplate';
import User from '@t/user';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const user: User = {
	id: '12345',
	name: 'John Doe',
	image: 'https://i.pravatar.cc/150',
	email: 'jdoe@email.com',
	emailVerified: false
};

const name = shortenName(user.name);

describe('Top Menu Template Tests', () => {
	it('Renders', () => {
		render(<TopMenu user={user} />);

		const hi = screen.getByText(name);
		const menu = hi.closest('header');

		expect(menu).toBeInTheDocument();
	});

	it('Uses generic text when no image', () => {
		render(<TopMenu user={{ ...user, name: null }} />);
		const hi = screen.getByText(`Hi there!`);
		expect(hi).toBeInTheDocument();
	});

	it('Renders user image', () => {
		render(<TopMenu user={user} />);
		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute('src', user.image);
	});

	it('Doesn\'t render empty image', () => {
		render(<TopMenu user={{ ...user, image: null }} />);
		const image = screen.queryByRole('img');
		expect(image).not.toBeInTheDocument();
	});

});


