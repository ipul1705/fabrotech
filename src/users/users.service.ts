import { Injectable } from '@nestjs/common';


export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'saifurrohman1705@gmail.com',
      password: 'qwert',
    },
    {
      userId: 2,
      username: 'maria@gmail.com',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
