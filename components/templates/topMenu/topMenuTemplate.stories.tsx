import type { Meta, StoryObj } from '@storybook/react';
import TopMenuTemplate, { TopMenuTemplateProps } from "./topMenuTemplate";
import mockTopMenuTemplateProps from './topMenuTemplate.mocks';

const meta = {
	title: 'templates/TopMenuTemplate',
	component: TopMenuTemplate,
	argTypes: {},
} satisfies Meta<typeof TopMenuTemplate>;

export default meta;


type Story = StoryObj<typeof meta>;

const primaryArgs: TopMenuTemplateProps = {
	...mockTopMenuTemplateProps.primary,
};

export const Primary: Story = {
	args: primaryArgs,
};
