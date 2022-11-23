import { Router } from "express";
import { GetExampleController } from "./modules/example/controllers/GetExampleController";

const routes = Router();

const getExampleController = new GetExampleController();

routes.get("/example/:message", getExampleController.handle);

export { routes };
