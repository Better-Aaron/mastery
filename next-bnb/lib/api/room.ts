import { RegisterRoomState } from '@/types/reduxState';

export const registerRoomAPI = async (
  body: RegisterRoomState & {
    hostId: number;
  }
) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rooms`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json());
