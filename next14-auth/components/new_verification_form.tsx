"use client";

import { CardWrapper } from "./auth/card-wrapper";
import { BeatLoader } from "react-spinners";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login "
    >
      <div className="flex w-full items-center justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
