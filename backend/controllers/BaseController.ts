import express, { Router } from "express";

abstract class BaseController {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  protected abstract initializeRoutes(): void;
}

export default BaseController;
