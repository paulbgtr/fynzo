import { Router } from "express";
import { ProjectsController } from "../controllers/ProjectsController";

const router = Router();
const projectsController = new ProjectsController();

router.get("/", projectsController.getAllProjects);
router.get("/:id", projectsController.getProjectById);
router.post("/", projectsController.createProject);
router.put("/:id", projectsController.updateProject);
router.delete("/:id", projectsController.deleteProject);

export default router;
