import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    if (updateUserInput.password) {
      updateUserInput.password = await this.hashPassword(
        updateUserInput.password,
      );
    }
    return this.UsersRepository.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...updateUserInput,
        },
      },
    );
  }

  async remove(_id: string) {
    return this.UsersRepository.findOneAndDelete({ _id });
  }

  async veryfyUser(email: string, password: string) {
    const user = await this.UsersRepository.findOne({ email });
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
