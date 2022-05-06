import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const user = request.body;
    try {
      return response
        .status(201)
        .json(
          this.createUserUseCase.execute({ email: user.email, name: user.name })
        );
    } catch (error) {
      return response.status(400).json({ error: "mensagem do erro" });
    }
  }
}

export { CreateUserController };
