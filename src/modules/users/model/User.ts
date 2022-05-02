import { v4 as uuidV4 } from "uuid";

class User {
  constructor(
    public name: string,

    public email: string,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ) {
    this.id = uuidV4();
    this.admin = false;
  }
  public admin: boolean;
  public id: string;
}

export { User };
