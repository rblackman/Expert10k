import type { Meta, StoryObj } from '@storybook/react';
import mockTextInputTemplateProps from './testInputTemplate.mocks';
import TextInput, { TextInputTemplateProps } from './textInputTemplate';

const meta = {
	title: 'templates/inputs/TextInputTemplate',
	component: TextInput,
	argTypes: {
		id: {
			name: 'ID',
			description: 'HTML ID attribute',
			control: {
				type: 'text',
			},
		},
		label: {
			name: 'Label',
			description: 'Label text',
			control: {
				type: 'text',
			},
		},
		value: {
			name: 'Value',
			description: 'Input value',
			control: {
				type: 'text',
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
		required: {
			name: 'Required',
			description: 'Required input',
			control: {
				type: 'boolean',
				defaultValue: true,
			},
		},
	},
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: TextInputTemplateProps = {
	...mockTextInputTemplateProps.primary,
};

export const TextInputTemplate: Story = {
	args,
};
