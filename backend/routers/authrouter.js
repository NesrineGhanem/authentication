const {Router} = require('express');
const { login, register } = require('../controllers/authControllers');

const authrouter = Router();

authrouter.post("/auth/login",login)
authrouter.post("/auth/register",register)

module.exports=authrouter