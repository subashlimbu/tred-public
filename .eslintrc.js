module.exports = {
	extends: ['airbnb', 'plugin:react/recommended'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		indent: [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'jsx-quotes': ['error', 'prefer-single'],
		'comma-dangle': ['error', 'never'],
		'react/prop-types': 0
	}
};
