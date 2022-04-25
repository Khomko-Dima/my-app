const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		'@common': 'src/common',
	})(config);

	return config;
};
