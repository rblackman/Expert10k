import { MdAdd, MdLoop } from 'react-icons/md/';
import { IconButtonTemplateProps } from './iconButtonTemplate';

const primary: IconButtonTemplateProps = {
	children: <MdAdd />,
	label: 'Add',
	onClick: () => { },
	animate: false,
	iconSize: 'medium',
	variant: 'primary',
	outline: false,
	disabled: false
};

const animated: IconButtonTemplateProps = {
	children: <MdLoop />,
	label: 'Deleting',
	onClick: () => { },
	animate: true,
	iconSize: 'medium',
	variant: 'danger',
	outline: false,
	disabled: false
};


const mockIconButtonTemplateProps = {
	primary,
	animated
};

export default mockIconButtonTemplateProps;
