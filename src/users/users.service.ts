import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  role: 'admin' | 'user';
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'admin1', role: 'admin' },
    { id: 2, username: 'user1', role: 'user' },
    { id: 3, username: 'user2', role: 'user' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id);
  }
}
