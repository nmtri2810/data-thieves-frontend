import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface INavItemGroupProps {
  children: ReactNode;
  className?: string;
}

interface INavItemProps {
  children: ReactNode;
  fullHeight?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NavItemGroup: React.FC<INavItemGroupProps> = ({ children, className }) => (
  <div className={cn('nav-item-group flex gap-1 text-sm text-gray-600', className)}>{children}</div>
);

export const NavItem: React.FC<INavItemProps> = ({ children, fullHeight = false, className, onClick }) => (
  <div
    className={cn(
      'px-4 hover:bg-gray-200 hover:cursor-pointer',
      fullHeight ? 'h-full flex items-center rounded-sm' : 'py-1 rounded-full',
      className
    )}
    onClick={onClick}
  >
    {children}
  </div>
);