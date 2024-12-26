import express from 'express';
import { updateUser,deleteUser,getAllUser,getSingleId } from "../Controllers/userController.js";

const router=express.Router();

router.get("/",getAllUser);
router.get("/:id",getSingleId);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;