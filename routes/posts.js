const express = require('express')
const Post = require('../models/Post')
const User = require('../models/User')

const router = express.Router()

/**
 * 创建post
 */
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body)
    const post = await newPost.save()
    if(post) {
      return res.status(200).json(post)
    }
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 更新post
 */
router.put("/:id", async (req, res) => {
  try {
     const post = await Post.findById(req.params.id)
     if(post.userId === req.body.userId) {
      await post.updateOne({$set: req.body})
      return res.status(200).json('post更新成功')
     } else {
      return res.status(403).json('只能更新自己的post')
     }
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 删除post
 */
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if(post.userId === req.body.userId) {
      await Post.deleteOne({_id: req.params.id})
      return res.status(200).json('已删除')
    } else {
      return res.status(403).json('只能删除自己的post')
    }
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 赞post
 */
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if(!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId
        }
      })
      return res.status(200).json('已赞')
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId
        }
      })
      return res.status(200).json('已取消赞')
    }
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 获取一个post
 */
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if(post) {
      return res.status(200).json(post)
    }
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 获取时间线上的post
 */
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({userId: currentUser._id})
    const friendPosts = await Promise.all(
      currentUser.followings.map(friendId => {
        return Post.find({userId: friendId})
      })
    )
    return res.status(200).json(userPosts.concat(...friendPosts))
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 获取某个用户的所有posts
 */
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username})
    const userPosts = await Post.find({userId: user._id})
    return res.status(200).json(userPosts)
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router