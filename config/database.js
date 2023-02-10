module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cef140o2i3mum5u3ekk0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_3y50'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'LsFB7ZH0i9su87mY5titDDfl9grUIbX9'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
