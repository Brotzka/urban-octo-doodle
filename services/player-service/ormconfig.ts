module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3310,
  username: 'root',
  password: 'root',
  database: 'webgame',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/migrations',
  },
};
