import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface CalloutProps {
  children?: ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export const Callout = ({
  children,
  type = 'default',
  ...props
}: CalloutProps) => {
  return (
    <div
      className={cn(
        'my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none',
        {
          'border-red-900 bg-red-50 dark:prose': type === 'danger',
          'border-yello-900 bg-yello-50 dark:prose': type === 'warning',
        }
      )}
      {...props}
    >
      <div> {children}</div>
    </div>
  );
};
