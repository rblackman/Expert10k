import type { Meta, StoryObj } from '@storybook/react';
import IconButtonTemplate, { IconButtonTemplateProps } from './iconButtonTemplate';
import mockButtonTemplateProps from './iconButtonTemplate.mocks';

const meta = {
	title: 'templates/IconButton',
	component: IconButtonTemplate,
	argTypes: {
		children: {
			name: 'Contents',
			description: 'The text to display on the button.',
			table: {
				category: 'Content',
			},
		},
		variant: {
			name: 'Variant',
			description: 'The color variant of the button.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: 'primary' },
			},
			options: ['primary', 'secondary', 'danger'],
			control: { type: 'radio' },
		},
		iconSize: {
			name: 'Icon Size',
			description: 'Size of the icon button.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: 'medium' },
			},
			options: ['small', 'medium', 'large'],
			control: { type: 'radio' },
		},
		animate: {
			name: 'Animate',
			description: 'Whether the button should animate.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: false },
			},
			control: 'boolean',
			defaultValue: false
		},
		outline: {
			name: 'Outline',
			description: 'Whether the button should be outlined.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: false },
			},
			control: 'boolean',
			defaultValue: false,
		},
		disabled: {
			name: 'Disabled',
			description: 'Whether the button should be disabled.',
			table: {
				category: 'Appearance',
				defaultValue: { summary: false },
			},
			control: 'boolean',
			defaultValue: false,
		},
	},
} satisfies Meta<typeof IconButtonTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

const primaryButtonArgs: IconButtonTemplateProps = {
	...mockButtonTemplateProps.primary,
};

export const PrimaryButton: Story = {
	args: primaryButtonArgs,
};

const animatedButtonArgs: IconButtonTemplateProps = {
	...mockButtonTemplateProps.animated,
};

export const AnimatedButton: Story = {
	args: animatedButtonArgs
}
