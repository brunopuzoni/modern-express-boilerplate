import { Request, Response } from "express";
import { GetExampleUsecase } from "../usecases/GetExampleUsecase";

export class GetExampleController {
  async handle(req: Request, res: Response) {
    const { message } = req.params;

    const getExampleUsecase = new GetExampleUsecase();
    const result = getExampleUsecase.execute({ message });

    return res.json(result);
  }
}
