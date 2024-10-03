import prisma from '@/db';

export const getUserByEmail = async (email: string | null | undefined) => {
  if (email) {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      return user;
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};