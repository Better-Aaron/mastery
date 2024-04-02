"use client";

import { UserInfo } from "@/components/auth/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
import React from "react";

const ClientPage = () => {
  const user = useCurrentUser();

  return <UserInfo label="💻 Client component" user={user} />;
};

export default ClientPage;
