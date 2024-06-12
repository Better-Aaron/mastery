'use client';

import { CardWrapper } from './card-wrapper';

interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/sign-up"
      showSocial
    >
      login-form
    </CardWrapper>
  );
};
