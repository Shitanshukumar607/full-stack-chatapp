import express from "express";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";
import verifyJWT from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

router.get("/users", verifyJWT, getUsersForSidebar);
router.get("/:id", verifyJWT, getMessages);

router.post("/send/:id", verifyJWT, sendMessage);

export default router;
