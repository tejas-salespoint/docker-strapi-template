module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'dai-industry.mysql.database.azure.com'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'salespoint'),
			password: env('DATABASE_PASSWORD', 'tejas@1234'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
