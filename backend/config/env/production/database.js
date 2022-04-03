// extract database credentials from postgres connection string
// that might be provided by heroku
const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL ?? "");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host || env("DATABASE_HOST", "postgres"),
      port: config.port || env("DATABASE_PORT", "5432"),
      database: config.database || env("DATABASE_NAME", "strapi"),
      user: config.user || env("DATABASE_USERNAME", "strapi"),
      password: config.password || env("DATABASE_PASSWORD", ""),
      ssl:
        env("DATABASE_SSL", "true") === "true"
          ? {
              rejectUnauthorized: false,
            }
          : false,
    },
    debug: false,
  },
});
