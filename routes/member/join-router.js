const path = require('path')
const express = require('express')
const router = express.Router()

const{ pool: db } = require('../../modules/mysql-init')

router.get('/join', (req, res, next) => {
	// 회원가입 폼을 보여준다. View처리
	// <form method="POST" action="/member/join"
	// <input name="userid">
	// <input name="userpw">
	// res.render()
})

router.post('/join', (req, res, next) => {
	// 가입 폼에서 submit되면 저장.
	// req.body.userid
	// req.body.userpw
	// 데이터베이스 저장
	// res.redirect('/')
})


module.exports = router