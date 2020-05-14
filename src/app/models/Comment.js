import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.TEXT,
        user_id: Sequelize.INTEGER,
        post_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'usercomment' });
    this.belongsTo(models.Post, { foreignKey: 'post_id', as: 'postcomment' });
  }
}

export default Comment;
