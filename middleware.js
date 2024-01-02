export { default } from 'next-auth/middleware';

// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
	matcher: ['/api/activity', '/api/activity/:path*', '/account/((?!login|logout).*)', '/activity', '/activity/:path*'],
};
