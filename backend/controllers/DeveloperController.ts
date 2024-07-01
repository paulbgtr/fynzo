import { Request, Response } from "express";
import BaseController from "./BaseController";

class DeveloperController extends BaseController {
  constructor() {
    super();
  }

  protected initializeRoutes(): void {
    this.router.get("/developers/:id", this.getDeveloper);
    this.router.post("/developers", this.createDeveloper);
    this.router.put("/developers/:id", this.updateDeveloper);
    this.router.delete("/developers/:id", this.deleteDeveloper);
  }

  private getDeveloper(req: Request, res: Response) {}

  private createDeveloper(req: Request, res: Response) {}

  private updateDeveloper(req: Request, res: Response) {}

  private deleteDeveloper(req: Request, res: Response) {}
}

export default DeveloperController;
