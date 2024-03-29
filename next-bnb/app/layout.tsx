import type { Metadata } from 'next';
import { Inter, Noto_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import StoreProvider from './storeProvder';
import { cookies } from 'next/headers';
import { makeStore } from '@/store/store';
import { meAPI } from '@/lib/api/auth';
import { setLoggedUser } from '@/store/features/users/usersSlice';
import { useAppDispatch } from '@/store/hooks';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const jsonToken = cookieStore.get('access-token');
  const token = jsonToken && jsonToken.value ? jsonToken.value : '';
  const store = makeStore();
  const { isLogged } = store.getState().user;
  let user;
  try {
    if (!isLogged && token) {
      user = await meAPI(token);
      console.log(user);
    }
  } catch (e) {
    console.log(e);
  }

  return (
    <html lang="en">
      <body className={notoSans.className}>
        <StoreProvider user={user}>
          <Header />
          {children}
          <div id="root-modal" />
        </StoreProvider>
      </body>
    </html>
  );
}
