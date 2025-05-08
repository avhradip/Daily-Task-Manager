const express = require("express")
const { registration } = require("../controllers/user")
const router = express.Router()

router.post('/post', registration)

module.exports = router