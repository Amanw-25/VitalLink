import express from 'express';
import { updateUser,deleteUser,getAllUser,getSingleId } from "../Controllers/doctorController.js";
import { authenticate } from '../auth/verifyToken.js';
import { restrict } from '../auth/verifyToken.js';
const router=express.Router();


router.get("/",authenticate,restrict(["doctor"]),getAllUser);
router.get("/:id",authenticate,restrict(["admin"]) ,getSingleId);
router.put("/:id",authenticate,restrict(["doctor"]),updateUser);
router.delete("/:id",authenticate,restrict(["doctor"]),deleteUser);

export default router;