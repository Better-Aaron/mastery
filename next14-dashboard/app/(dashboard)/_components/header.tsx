'use client';

import { Button } from '@/components/ui/button';
import { CommandDemo } from './command';
import { BellIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { text } from 'stream/consumers';

export function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: 'This is a notification',
      date: '2024-04-11',
      read: true,
    },
    {
      text: 'This is another notification',
      date: '2024-04-11',
      read: false,
    },
    {
      text: 'This is a notification',
      date: '2024-04-11',
      read: true,
    },
  ]);
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="relative" variant="outline" size="icon">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? 'bg-green-500'
                    : 'bg-neutral-200'
                }`}
              ></div>
              <BellIcon className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? 'bg-green-500' : 'bg-neutral-200'
                  }`}
                ></div>
                <div className="">
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
