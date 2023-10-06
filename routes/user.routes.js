const {Router} = require("express")
const { user_register, user_login } = require("../controller/user.conroller")
const userRouter = Router()


userRouter.post("/register",user_register)
userRouter.post("/login",user_login)


module.exports = {userRouter}