import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
// middleware.ts

// export default authMiddleware({
//   // Optional: define your custom matcher here instead of config object
// });
export const { auth } = NextAuth(authConfig); // this is correct for server functions
export default auth;
// export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
