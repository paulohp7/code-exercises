const express = require('express');
const router = express.Router();

const postsA = [
    {
        "id": 1,
        "content": "aaaaaaa"
    },
    {
        "id": 2,
        "content": "bbbbbbb"
    }
  ];
  
  // const postB = [];
    
const listPosts = (req, res) => {
    res.status(201).json(postsA);
};
  
const listById = (req, res, next) => {
    const { id } = req.params;
    const myPost = postsA.find(post => post.id == id);
    if (!myPost) {
        console.log('post not found')
        return next({ statusCode: 404, message: 'post not found'})
    }
    res.status(200).json(myPost);
};

router.get('/', listPosts);
router.get('/:id', listById);

module.exports = router;