'use client';

import { setLoggedUser } from '@/store/features/users/usersSlice';
import { AppStore, makeStore } from '@/store/store';
import { UserType } from '@/types/user';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: UserType;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  if (user) {
    storeRef.current.dispatch(setLoggedUser(user));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
