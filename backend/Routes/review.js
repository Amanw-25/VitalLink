import express from "express";
import {
  getAllReviews,
  createReview,
} from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router= express.Router({mergeParams:true});

//We need to create route inside /doctor/doctorId/review

router.post('/',authenticate,restrict(['patient']),createReview);
router.get('/',getAllReviews)

export default router;