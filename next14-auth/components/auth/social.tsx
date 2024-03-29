"use client";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FcDatabase } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github" | "naver") => {
    signIn(provider, {
      callbackURl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          onClick("google");
        }}
      >
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          onClick("github");
        }}
      >
        <FaGithub className="size-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          onClick("naver");
        }}
      >
        <FcDatabase className="size-5" />
      </Button>
    </div>
  );
};
