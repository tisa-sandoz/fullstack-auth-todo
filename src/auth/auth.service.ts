/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
  ): Promise<User> {
    const hash = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hash,
      },
    });
  }
}
