module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'strapi.mysql.database.azure.com'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'strapisalespoint'),
			password: env('DATABASE_PASSWORD', '$Tejaslade89$'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
