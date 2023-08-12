import express from "express";
import {
    getAllAddUsers,
    getByIdAddUsers,
    postAddUsers,
    editAddUsers,
    deleteAddUsers
} from "../controllers/AddUser.js";

const router = express.Router();

router.get('/addUsers', getAllAddUsers)
router.get('/addUsers/:id', getByIdAddUsers)
router.post('/addUsers', postAddUsers)
router.patch('/addUsers/:id', editAddUsers)
router.delete('/addUsers/:id', deleteAddUsers)

export default router;