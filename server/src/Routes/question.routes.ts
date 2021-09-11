import express from "express";
import questionController from "../Controllers/question.controller";

const router = express.Router();

router.get("/", questionController.getQuestions);
router.post("/create", questionController.create);

export { router as questionRouter };
