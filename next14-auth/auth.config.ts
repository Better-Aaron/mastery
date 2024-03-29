import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./data/user";

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Naver from "next-auth/providers/naver";

export default {
  providers: [
    Naver({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validateField = LoginSchema.safeParse(credentials);

        if (validateField.success) {
          const { email, password } = validateField.data;

          const user = await getUserByEmail(email);
          //* 소셜 가입 유저가 로그인 시도 했을때
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compareSync(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
