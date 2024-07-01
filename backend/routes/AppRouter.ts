import express from "express";
import BaseController from "../controllers/BaseController";

class AppRouter {
  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }

  public initializeControllers(controllers: BaseController[]): void {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }
}

export default AppRouter;
