import Post from '../models/Post';
import Comment from '../models/Comment';
import User from '../models/User';
import File from '../models/File';

class PostController {
  async index(req, res) {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ['id', 'content'],
          include: [
            {
              model: User,
              as: 'usercomment',
              attributes: ['name'],
              include: [
                {
                  model: File,
                  as: 'avatar',
                  attributes: ['id', 'path', 'url'],
                },
              ],
            },
          ],
        },
      ],
    });

    return res.json(posts);
  }

  async store(req, res) {
    const { content } = req.body;

    const post = await Post.create({
      content,
      user_id: req.userId,
    });

    return res.json(post);
  }

  async update(req, res) {
    const { id } = req.params;
    const { content } = req.body;

    const post = await Post.findByPk(id);

    if (post.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'This post does not belong to you ' });
    }

    await post.update({ content });

    return res.json(post);
  }
}

export default new PostController();
