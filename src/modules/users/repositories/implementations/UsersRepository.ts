import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => {
      return user.id === id;
    });
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => {
      return user.email === email;
    });
  }

  turnAdmin(receivedUser: User): User {
    const user = this.findById(receivedUser.id);
    user.admin = true;
    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
