const express =require('express');
const registerController = require('../controller/users/register.controller')
const loginController = require('../controller/users/login.controller');
const getAllUsersController = require('../controller/users/getAllUsers.controller');
const authRouter = express.Router();
const upload = require('../middleware/multer');
const auth = require('../middleware/auth');

authRouter.post('/register',upload.single('images') ,registerController);

authRouter.post('/login' ,loginController);

authRouter.get('/users' ,auth, getAllUsersController)

module.exports = authRouter