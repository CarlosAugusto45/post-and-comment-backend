module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('posts', 'comment_id', {
      id: Sequelize.INTEGER,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('posts');
  },
};
