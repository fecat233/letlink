const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const router = express.Router()

/**
 * 注册用户
 */
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      username: req.body.username,
      password: hashPassword,
      email: req.body.email
    })
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})

/**
 * 用户登录
 */
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if(!user) {
      return res.status(404).json('用户不存在')
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) {
      return res.status(400).json('密码错误')
    }

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router