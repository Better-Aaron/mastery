// naver-fetch.interceptor.ts

/**
 * This interceptor is used to modify the response of the naver access token request as it does not strictly follow the OAuth2 spec
 * naver의 oauth token 데이터중  expires_in 이 string 으로 되어 있는데   next-auth 에서는 int로 받고 있어서 충돌이 발생 -> expires_in 을 강재로 int로 변환하여 처리
 * naver는 해당 값 변경 예정이 없다고 했고 {https://github.com/nextauthjs/next-auth/discussions/9313}
 * next-auth는 Due to Naver's response, they will not fix the issue now. Therefore, we need to hard-code only for this Naver's case. 라고 답변을 담.
 * @created 2024.03.29 11:37:00 에 작성
 * @param originalFetch
 */
export const naverFetchInterceptor =
  (originalFetch: typeof fetch) =>
  async (
    url: Parameters<typeof fetch>[0],
    options: Parameters<typeof fetch>[1] = {},
  ) => {
    /* Only intercept naver access token request */
    if (
      url === "https://nid.naver.com/oauth2.0/token" &&
      options.method === "POST"
    ) {
      const response = await originalFetch(url, options);
      /* Clone the response to be able to modify it */
      const clonedResponse = response.clone();
      const body = await clonedResponse.json();

      body.expires_in = parseInt(body.expires_in);

      /*  Create a new response with the modified body */
      const modifiedResponse = new Response(JSON.stringify(body), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });

      /* Add the original url to the response */
      return Object.defineProperty(modifiedResponse, "url", {
        value: response.url,
      });
    }

    return originalFetch(url, options);
  };
