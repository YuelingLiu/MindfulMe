import React from 'react';
import Button from './Button';
import Link from 'next/link';

import { Fugaz_One } from 'next/font/google'; // Import the Fugaz One font
import Calender from './Calendar';
const fugaz = Fugaz_One({
  weight: '400', // Adjust the weight if needed
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-4 sm:gap-8">
      <h1
        className={`text-5xl sm:text-6xl md:text-7xl text-center ${fugaz.className}`}
      >
        <span className="textGradient">MindfulMe</span> helps you track your
        <span className="textGradient"> daily</span> mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px] ">
        Create your mood record and see how you feel on
        <span className="font-semibold"> every day of every year. </span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto ">
        <Link href={'/dashboard'}>
          <Button text="Sign Up " />
        </Link>

        <Link href={'/dashboard'}>
          <Button text="Login " dark />
        </Link>
      </div>
      <Calender demo />
    </div>
  );
}
