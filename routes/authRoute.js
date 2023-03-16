import express from "express"
import {registerController,loginController} from "../controllers/authController.js"
//route object
const router = express.Router()

//routuing
//register
router.post('/register',registerController)
//LOGIN {{ Poat}}
router.post('/login',loginController)
export default router
