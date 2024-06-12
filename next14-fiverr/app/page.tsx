"use client";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {
  const storeUser = useMutation(api.users.store);

  useEffect(() => {
    storeUser({});
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world
    </main>
  );
}
