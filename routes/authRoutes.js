import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  getUserDataController,
} from "../controllers/authController.js";
import {  isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);
router.get('/user', getUserDataController);
// //test routes
router.get("/test", requireSignIn, isAdmin, testController);


//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

export default router;