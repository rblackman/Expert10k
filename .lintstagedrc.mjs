import path from 'path';

const buildEslintCommand = (filenames) => [
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
];

const config = {
	'**/schema.prisma': () => 'npx prisma format',
	'**/*.(ts|tsx)': () => 'npx tsc --noEmit',
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
};

export default config;
