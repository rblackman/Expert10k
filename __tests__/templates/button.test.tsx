import Button from '@components/templates/button/buttonTemplate';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Button Template Tests', () => {
	it('Renders children', () => {
		const text = 'Hello World';

		render(
			<Button buttonType="button" onClick={() => {}}>
				{' '}
				{text}
			</Button>,
		);

		const button = screen.getByText(text);

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(text);
	});

	it('Renders buttonType as button element', () => {
		const text = 'Hello World';

		render(
			<Button buttonType="button" onClick={() => {}}>
				{text}
			</Button>,
		);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('type', 'button');
	});

	it('Calls button click', () => {
		const text = 'Hello World';
		const onClick = jest.fn();
		render(
			<Button buttonType="button" onClick={onClick}>
				{text}
			</Button>,
		);

		const button = screen.getByRole('button');
		button.click();

		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('Renders href link', () => {
		const text = 'Hello World';
		const hr = '#';

		render(<Button href={hr}>{text}</Button>);

		const button = screen.getByRole('link');

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('href', hr);
	});
});
