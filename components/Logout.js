'use client';
import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { useAuth } from 'context/AuthContext';
import { usePathname } from 'next/navigation';
export default function Logout() {
  const { logout, currentUser } = useAuth();
  const pathname = usePathname();
  console.log(pathname);
  if (!currentUser) {
    return null;
  }
  if (pathname === '/') {
    return (
      <Link href={'/dashboard'}>
        <Button text="Go to dashboard" />
      </Link>
    );
  }
  return (
    <div>
      <Button text="logout" clickHandler={logout} />
    </div>
  );
}
