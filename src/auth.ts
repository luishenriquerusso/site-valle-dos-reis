import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "@auth/core/providers/credentials"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { getUserByEmail } from "@/app/api/users/getUserByEmail";
import bcryptjs from 'bcryptjs';

import prisma from './db'

const credentialsConfig = Credentials({
  name: "credentials",
  credentials: {
    username: {
      label: "Email",
    },
    password: {
      label: "Senha",
      type: "password",
    },
  },
  async authorize(credentials) {

    if (!credentials?.username || !credentials?.password) {
      return null
    }
    
    const user = await getUserByEmail(credentials.username as string);
    if (!user || !user.password) return null;
    const passaword = user?.password

    const passwordsMatch = await bcryptjs.compare(
      credentials.password as string,
      passaword as string
    );

    if (passwordsMatch) return user;
    return null;
    
  },

});


const nextauthconfig = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    credentialsConfig
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middlewareProtected") return !!auth;
      return true;
    },
// eslint-disable-next-line
    async jwt({ token, user, trigger, session }: any){
      if(trigger === 'update'){
        return {...token, ...session.user};
      }
      if (user && user.role) token.role = user.role;
      if (user && user.cpf) token.cpf = user.cpf;
      if (user && user.phone) token.phone = user.phone;
      return token;
    },
    // eslint-disable-next-line
    async session({ session, token }: any){
      session.user.id = token.sub
      session.user.role = token.role
      session.user.cpf = token.cpf;
      session.user.phone = token.phone;
      return session
    },
  },
  pages: {
    signIn: '/login',
  }

} satisfies NextAuthConfig;


export const { handlers, signIn, signOut, auth } = NextAuth(nextauthconfig)