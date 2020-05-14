import Comment from '../models/Comment';
import Post from '../models/Post';
import User from '../models/User';

import Notification from '../schemas/Notification';

class CommentController {
  async store(req, res) {
    const { content } = req.body;
    const { id } = req.params;

    const post = await Post.findOne({
      where: { id },
      // include: [
      //   {
      //     model: User,
      //     as: 'userpost',
      //     attributes: ['name'],
      //   },
      // ],
    });

    const comment = await Comment.create({
      content,
      post_id: id,
      user_id: req.userId,
    });

    // console.log(post);

    const userComment = await User.findOne({
      where: { id: req.userId },
    });

    if (comment) {
      if (post.user_id !== req.userId) {
        await Notification.create({
          content: `${userComment.name}, comentou sua publicação`,
          user_id: post.user_id,
        });
      }
    }

    return res.json(comment);
  }
}

export default new CommentController();
