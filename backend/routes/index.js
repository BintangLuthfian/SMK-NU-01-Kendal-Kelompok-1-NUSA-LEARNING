import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";
import {
    getUser,    
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/adduser.js"

const router = express.Router();

// LogReg

router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

// AddUser

router.get('/user', getUser);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


export default router;