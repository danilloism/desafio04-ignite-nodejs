import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const user = request.body;
    return response.json(
      this.createUserUseCase.execute({ email: user.email, name: user.name })
    );
  }
}

export { CreateUserController };
