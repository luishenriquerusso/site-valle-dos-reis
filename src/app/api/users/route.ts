import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/db';
import bcryptjs from 'bcryptjs';

import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const { name, email, password, cpf } = await req.json();

  try {
    const isUserExist = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (isUserExist) {
      return NextResponse.json(
        { error: 'User already exists' }, { status: 400 })
    }

    const isCpfExist = await prisma.user.findUnique({
      where: {
        cpf
      }
    })
    if (isCpfExist) {
      return NextResponse.json(
        { error: 'Cpf already exists' }, { status: 400 })
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        name,
        email,
        password: hashedPassword,
        cpf,
        role: "user"
      },
    });

    return NextResponse.json({
      message: "Usuário criado com sucesso!",
      user: newUser
    })
   // eslint-disable-next-line
  } catch (error: any) {
    // console.error('Erro ao criar usuário:', error);
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return NextResponse.json({
        error: 'Este e-mail já está em uso.',
      }, { status: 400 })
    }
  }
}
