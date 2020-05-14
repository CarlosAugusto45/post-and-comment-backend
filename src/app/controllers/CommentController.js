import Comment from '../models/Comment';

class CommentController {
  async store(req, res) {
    const { content } = req.body;
    const { id } = req.params;

    const comment = await Comment.create(
      {
        content,
        post_id: id,
        user_id: req.userId,
      }
      // {
      //   include: [
      //     {
      //       model: User,
      //       as: 'usercomment',
      //       attributes: ['name', 'avatar'],
      //     },
      //   ],
      // }
    );

    return res.json(comment);
  }
}

export default new CommentController();
