import { TextInputTemplateProps } from "./textInputTemplate";

const primary: TextInputTemplateProps = {
	id: 'text',
	label: 'Text',
	value: 'Test 123',
	onChange: (value) => console.log('Text changed', { value })
};

const mockTextInputTemplateProps = {
	primary,
};

export default mockTextInputTemplateProps;
