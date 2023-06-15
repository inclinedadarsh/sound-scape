module.exports = {
	'*.{js,jsx,ts,tsx,cjs}': ['prettier --write', 'eslint . --fix'],
	'*.{css,styl,html,md,json,yml,yaml}': ['prettier --write'],
};
