import { ProjectsService } from "../services/projectsService";
import { Request, Response } from "express";

const projectsService = new ProjectsService();

export class ProjectsController {
  async getAllProjects(req: Request, res: Response) {
    const projects = await projectsService.getAllProjects();
    res.json(projects);
  }

  async getProjectById(req: Request, res: Response) {
    const { id } = req.params;
    const project = await projectsService.getProjectById(parseInt(id));
    res.json(project);
  }

  async createProject(req: Request, res: Response) {
    const { name, description, startDate, endDate, priority } = req.body;

    const project = {
      name,
      description,
      startDate,
      endDate,
      priority,
    };

    const createdProject = await projectsService.createProject(project);

    res.json(createdProject);
  }

  async updateProject(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, status, startDate, endDate, priority, mood } =
      req.body;

    const project = {
      name,
      description,
      status,
      startDate,
      endDate,
      priority,
      mood,
    };

    const updatedProject = await projectsService.updateProject(
      parseInt(id),
      project
    );
    res.json(updatedProject);
  }

  async deleteProject(req: Request, res: Response) {
    const { id } = req.params;

    const deletedProject = await projectsService.deleteProject(parseInt(id));

    res.json(deletedProject);
  }
}
