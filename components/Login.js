import React from 'react';
import { Fugaz_One } from 'next/font/google'; // Import the Fugaz One font
import Button from './Button';
const fugaz = Fugaz_One({
  weight: '400', // Adjust the weight if needed
  subsets: ['latin'],
});
export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={`text-4xl sm:text-5xl md:text-6xl ${fugaz.className}`}>
        {' '}
        Log In / Register
      </h3>
      <p>You're one step away!</p>
      <input type="text" />
      <input type="text" />
      <Button text="Submit" />
    </div>
  );
}
