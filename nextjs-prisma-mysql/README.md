1. create next 14, typescript, tailwindcss

```
npx create-next-app@latest .
typescript y
tailwindcss y
```

2. add daisyui

```
// 1. Install daisyUI:
npm i -D daisyui@latest

// 2. Then add daisyUI to your tailwind.config.js files:
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

3. add prisma

```
npm i @prisma/client
npm i prisma -D
npx prisma init --datasource-provider mysql
```

keyword

- 정의
- 사용이유
- 사용처
- 샘플코드

useFormState
zod
revalidatePath

redirect
