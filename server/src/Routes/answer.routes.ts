import express from "express";
import answerController from "../Controllers/answer.controller";

const router = express.Router();

router.post("/create/:questionId", answerController.create);

export { router as answerRouter };
