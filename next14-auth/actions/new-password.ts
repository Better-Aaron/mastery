"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import bcyrpt from "bcrypt";
import { getUserByEmail } from "@/data/user";
import { getpPasswordResetTokenByToken } from "@/data/password-reset-token";
import { NewPasswordSchema } from "@/schemas";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null,
) => {
  if (!token) {
    return { error: "Missing Token" };
  }

  const validateFields = NewPasswordSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "!invalid fields" };
  }

  const { password } = validateFields.data;

  const existingToken = await getpPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const hashedPassword = await bcyrpt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Password updated!" };
};
