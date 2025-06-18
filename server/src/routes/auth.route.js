import { Router } from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import verifyJWT from "../middlewares/verifyJWT.middleware.js";
const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/profile", verifyJWT, updateProfile);
router.get("/check", verifyJWT, checkAuth);

export default router;
