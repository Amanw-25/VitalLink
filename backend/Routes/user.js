import express from 'express';
import { updateUser,deleteUser,getAllUser,getSingleId, getUserProfile, getMyAppointments } from "../Controllers/userController.js";

import { authenticate ,restrict} from '../auth/verifyToken.js';


const router=express.Router();

router.get("/",authenticate,restrict(["patient"]),getAllUser);
router.get("/:id",authenticate,restrict(["admin"]),getSingleId);
router.put("/:id",authenticate,restrict(["patient"]),updateUser);
router.delete("/:id",authenticate,restrict(["patient"]),deleteUser);

router.get("/profile/me",authenticate,restrict(["patient"]),getUserProfile);
router.get("/appointments/my-appointments",authenticate,restrict(["patient"]),getMyAppointments);



export default router;