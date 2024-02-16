import  express from "express";

import multer from "multer";

import path from "path";

const router = express.Router();
import { authUser,registerUser,logoutUser } from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

router.post('/',registerUser )
router.post('/auth',authUser)
router.post('/logout',logoutUser)

export default router;