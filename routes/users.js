

const express = require('express')
const app = express();

const userController = require('../controllers/userController')
const router = express.Router()

app.set('view engine' , 'ejs')
app.set('views' , './views')
router.get('/profile', userController.profile)


router.post('/create', userController.createSession);
router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.post('/signin', userController.signInUser);


module.exports  = router;