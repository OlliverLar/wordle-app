import { Router } from "express";
import randomWord from "../getwords.js";

const router = Router();

router.get("/word", async (req, res) => {
  res.json(randomWord);
});
export default router;
