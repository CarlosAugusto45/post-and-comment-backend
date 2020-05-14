module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'firstpost',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
