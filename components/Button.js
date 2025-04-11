import React from 'react';
import { Fugaz_One } from 'next/font/google'; // Import the Fugaz One font
const fugaz = Fugaz_One({
  weight: '400', // Adjust the weight if needed
  subsets: ['latin'],
});

export default function Button(props) {
  const { text, dark, full, clickHandler } = props;
  return (
    <button
      onClick={clickHandler}
      className={` rounded-full  border-solid border-2 overflow-hidden duration-200 hover:opacity-60  ${
        dark ? 'text-white bg-indigo-600' : 'text-indigo-600'
      }
      ${full ? 'grid place-items-center w-full' : ' '} `}
    >
      <p
        className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${fugaz.className}`}
      >
        {text}
      </p>
    </button>
  );
}
