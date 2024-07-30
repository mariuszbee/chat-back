import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly UsersRepository: UsersRepository) {}
  async create(createUserInput: CreateUserInput) {
    return this.UsersRepository.create({
      ...createUserInput,
      password: await this.hashPassword(createUserInput.password),
    });
  }
  private async hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }
  async findAll() {
    return this.UsersRepository.find({});
  }

  async findOne(_id: string) {
    return this.UsersRepository.findOne({ _id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {
    return this.UsersRepository.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...updateUserInput,
          password: await this.hashPassword(updateUserInput.password),
        },
      },
    );
  }

  async remove(_id: string) {
    return this.UsersRepository.findOneAndDelete({ _id });
  }
}
