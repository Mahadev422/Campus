import Post from "../models/post.model.js";

export const uploadPost = async (req, res) => {
  const userId = req.userId;
  if (!req.body) return res.status(400).json({ok: false, msg: 'Missing Data'});
  const data = req.body;
  try {
    const newPost = await Post.create({userId, ...data});
    if(!newPost) return res.status(500).json({ok: false, msg: 'Internal Server Errors'});

    res.status(201).json({ ok: true, msg: newPost });
  } catch (err) {
    res.status(500).json({ok: false, msg: err.message});
  }
};

export const getPostBy = async (req, res) => {
  const {key, id} = req.params;
}