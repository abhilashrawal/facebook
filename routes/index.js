const { Router } = require('express');
const express = require('express')
//const app = express();

const homeController = require('../controllers/homeController')
const router = express.Router()


router.get('/', homeController.home)

router.get('/live', homeController.live)

module.exports  = router;