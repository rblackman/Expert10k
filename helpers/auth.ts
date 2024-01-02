import prisma from '@db/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import throwError from './throwError';

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? throwError('Missing GOOGLE_CLIENT_ID'),
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? throwError('Missing GOOGLE_CLIENT_SECRET'),
		}),
	],
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/account/login',
		signOut: '/account/logout',
		newUser: '/account/new-user',
		error: '/account/error',
	},
};

// Use it in server contexts
export default function auth(
	...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
	return getServerSession(...args, authOptions);
}
