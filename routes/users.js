const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const router = express.Router()

/**
 * 更新用户
 */
router.put("/:id", async (req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    if(req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        return res.status(500).json({
          error: error
        })
      }
    }
    try {
     const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
     if(user) {
       return res.status(200).json('账户已更新')
     }
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json("只能更新自己的账号")
  }
})

/**
 * 删除账户
 */
router.delete("/:id", async (req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.deleteOne({_id: req.params.id})
      if(user) {
        return res.status(200).json('账号删除成功')
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('只能删除自己的账号')
  }
})

/**
 * 查询一个用户
 */
router.get("/", async (req, res) => {
  const userId = req.query.userId
  const username = req.query.username
  try {
    const user = userId? await User.findById(userId) : await User.findOne({username: username})
    const {password, updatedAt, ...other} = user._doc
    if(user) {
      return res.status(200).json(other)
    }
  } catch (error) {
    return res.status(500).json(error)
  }
})

/**
 * 关注用户
 */
router.put('/:id/follow', async (req, res) => {
  console.log(req.body.userId)
  if(req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if(!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: {
            followers: req.body.userId
          }
        })
        await currentUser.updateOne({
          $push: {
            followings: req.params.id
          }
        })
        return res.status(200).json('关注了哦')
      } else {
        return res.status(403).json('已经关注过哦')
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json("不能关注自己哦")
  }
})

/**
 * 取消关注
 */
router.put('/:id/unfollow', async (req, res) => {
  if(req.body.userId !== req.params.id){
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if(user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $pull: {
            followers: req.body.userId
          }
        })
        await currentUser.updateOne({
          $pull: {
            followings: req.params.id
          }
        })
        return res.status(200).json('取消关注了哦')
      } else {
        return res.status(403).json('已经取消关注了')
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('不能取消关注自己哦')
  }
})

/**
 * 获取朋友
 */
router.get('/friends/:userId', async (req, res) => {
  try {
    let friendList = []
    const user = await User.findById(req.params.userId)
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId)
      })
    )
    friends.map((friend) => {
      const {_id, username, profilePicture} = friend
      friendList.push({_id, username, profilePicture})
    })
    return res.status(200).json(friendList)
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router