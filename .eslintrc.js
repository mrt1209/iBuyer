module.exports = {
	root: true,

	env: {
		node: true,
	},

	extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],

	parserOptions: {
		parser: "@typescript-eslint/parser",
	},

	rules: {
		"no-console": "off",
		"no-debugger": "off",
		useTabs: false,
	},

	extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)"],
			env: {
				mocha: true,
			},
		},
	],
};
