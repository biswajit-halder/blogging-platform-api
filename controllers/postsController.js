const { getPostById, getAllPosts, getPostByTerm, addPost, updatePosts, deletePosts } = require('../model/postsModel');

const getPosts = (req, res) => {
    try {
        if (req.params.id) {
            getPostById(req.params.id).then(post => {
                if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                }
                return res.status(200).json(JSON.parse(JSON.stringify(post)));
            }).catch(error => {
                return res.status(500).json({ message: error.message });
            });
        } else if (req.query && req.query.term) {
            const term = req.query.term;
            getPostByTerm(term).then(posts => {
                return res.status(200).json(JSON.parse(JSON.stringify(posts)));
            }).catch(error => {
                return res.status(500).json({ message: error.message });
            });
        } else {
            getAllPosts().then(posts => {
                return res.status(200).json(JSON.parse(JSON.stringify(posts)));
            }).catch(error => {
                return res.status(500).json({ message: error.message });
            });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const createPost = (req, res) => {
    console.log(req.body);
    try {
        if (!req.body.title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        if (!req.body.content) {
            return res.status(400).json({ message: 'Content is required' });
        }
        if (!req.body.category) {
            return res.status(400).json({ message: 'Category is required' });
        }
        if (!req.body.tags) {
            return res.status(400).json({ message: 'Tags are required' });
        } else if (!Array.isArray(req.body.tags)) {
            return res.status(400).json({ message: 'Tags must be an array' });
        }

        const { title, content, category, tags } = req.body;
        const currdate = new Date();
        const createdAt = currdate.toISOString().slice(0, 19).replace('T', ' ');
        const updatedAt = currdate.toISOString().slice(0, 19).replace('T', ' ');

        addPost(title, content, category, tags, createdAt, updatedAt).then(result => {
            if (result.affectedRows === 0) {
                return res.status(500).json({ message: 'Failed to create post' });
            }
            const postId = result.insertId;
            const newPost = {
                id: postId,
                title,
                content,
                category,
                tags,
                createdAt,
                updatedAt
            };
            return res.status(201).json({ message: 'Post created successfully', post: newPost });
        }).catch(error => {
            return res.status(400).json({ message: error.message });
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

const updatePost = (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Post ID is required' });
        }
        if (!req.body.title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const { title, content, category, tags } = req.body;
        const currdate = new Date();
        const updatedAt = currdate.toISOString().slice(0, 19).replace('T', ' ');

        updatePosts(req.params.id, title, content, category, tags, updatedAt).then(result => {
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Post not found' });
            }

            getPostById(req.params.id)
            .then(updatedPost => {
                return res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
            }).catch(error => {
                return res.status(400).json({ message: error.message });
            });
        }).catch(error => {
            return res.status(400).json({ message: error.message });
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deletePost = (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({ message: 'Post ID is required' });
        }

        deletePosts(req.params.id).then(result => {
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Post not found' });
            }
            return res.status(200).json({ message: 'Post deleted successfully' });
        }).catch(error => {
            return res.status(400).json({ message: error.message });
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
};