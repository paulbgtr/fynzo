import express from "express";

import AppRouter from "./routes/AppRouter";

import DeveloperController from "./controllers/DeveloperController";

const app = express();
const port = 8080;

const developerController = new DeveloperController();
const appRouter = new AppRouter(app);

const controllers = [developerController];

appRouter.initializeControllers(controllers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
