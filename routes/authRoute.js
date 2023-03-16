import express from "express"
import {registerController,loginController,testController} from "../controllers/authController.js"
import { requireSignIn } from "../middleware/authMiddleware.js"
//route object
const router = express.Router()

//routuing
//register
router.post('/register',registerController)
//LOGIN {{ Poat}}
router.post('/login',loginController)
//tst
router.get('/test',requireSignIn,testController)
export default router
