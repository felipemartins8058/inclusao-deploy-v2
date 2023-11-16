import {NextResponse, NextRequest} from 'next/server';
import {sign} from 'jsonwebtoken'
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const {email, password} = await req.json();

  if (email === 'admin' && password === 'admin') {
    return NextResponse.json({
        message: 'Não autorizado',
    }, {status: 401});
  }

  const secret = process.env.JWT_SECRET || "";

  const token = sign({
    email,
  },
  secret,
  {
    expiresIn: '1d',
  })

  const serializedToken = serialize("OutSiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24,
    path: '/',
  })

  const response = {message: 'Login efetuado com sucesso!'}

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
        'Set-Cookie': serializedToken,
    }
  })
}