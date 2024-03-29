import { GET as AuthGET, POST as AuthPOST } from "@/auth";

import { NextRequest } from "next/server";
import { naverFetchInterceptor } from "./naver-fetch.interceptor";

const originalFetch = fetch;

export async function POST(req: NextRequest) {
  return await AuthPOST(req);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  if (url.pathname === "/api/auth/callback/naver") {
    global.fetch = naverFetchInterceptor(originalFetch);
    const response = await AuthGET(req);
    global.fetch = originalFetch;
    return response;
  }

  return await AuthGET(req);
}
