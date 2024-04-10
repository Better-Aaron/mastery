'use client';

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { UserItem } from './user-item';
import {
  User,
  Inbox,
  CreditCard,
  Bell,
  Settings,
  Cookie,
  MessageSquare,
} from 'lucide-react';

export const Sidebar = () => {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/i',
          icon: <Inbox />,
          text: 'Inbox',
        },
        {
          link: '/b',
          icon: <CreditCard />,
          text: 'Billing',
        },

        {
          link: '/n',
          icon: <Bell />,
          text: 'Notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/s',
          icon: <Settings />,
          text: 'General Settings',
        },
        {
          link: '/p',
          icon: <Cookie />,
          text: 'Privacy',
        },
        {
          link: '/l',
          icon: <MessageSquare />,
          text: 'Logs',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup heading={menu.group} key={key}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>settings/notifications</div>
    </div>
  );
};
