// eslint-disable-next-line
import NextAuth from "next-auth";
// eslint-disable-next-line
import { User } from "@prisma/client";
// eslint-disable-next-line
import { JWT } from '@next-auth/jwt';

declare module "next-auth" {
  interface Session {
    user: User
  }
}

declare module "next-auth/jwt"{
  type JWT = User
}