import { Router } from 'express';
import JobController from '../controllers/JobController.js';
import upload from '../multer/multer.js';

const jobController = new JobController();
const router = Router();

router.get("/jobs/:filter?", jobController.retornaJob);
router.get("/uploads/:name", jobController.retornaLogo);
router.post("/insereJobs", upload.single("logo"), (req, res) => jobController.insereJob(req, res));

router.delete("/jobs/delete/:id", (req, res) => jobController.deleteJob(req, res));

export default router;