module.exports = {
	'apps': [
		{
		'name': 'app2',
		'script': './bin/www', //改成
		'instances': 'max',
		'exec_mode': 'cluster',
		'autorestart': false,
		'env': {
			'NODE_ENV': 'production',
			'PORT':3001
		},
		'env_production': {
			'NODE_ENV': 'production',
		},
		'error_file': './logs/pm2_app1_err.log',
		'out_file': './logs/pm2_app1_out.log',
		'merge_logs': true, 
		'log_date_format': 'YYYY-MM-DD HH:mm:ss Z',
		}
	]
};
