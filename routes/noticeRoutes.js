import { Router } from "express";
const router = Router();
import { postNotice, getAllNotices } from "../controllers/noticeController.js";

router.post('/notice', postNotice);
router.get('/notices', getAllNotices);

export default router;
