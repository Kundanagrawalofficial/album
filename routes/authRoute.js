import express from "express"
import {registerController,loginController,testController,forgotPasswordController} from "../controllers/authController.js"
import { isAdmin, requireSignIn} from "../middleware/authMiddleware.js"
//route object
const router = express.Router()

//routuing
//register
router.post('/register',registerController)
//LOGIN {{ Poat}}
router.post('/login',loginController)
//Forget Password
router.post('/forgot-password',forgotPasswordController)
//tst
router.get('/test',requireSignIn,isAdmin,testController)
//protected route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});
//admin
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});
export default router
