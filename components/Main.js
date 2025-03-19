import React from 'react';

// recieve the properties
export default function Main(props) {
  // destructure out the children contents and render it on the screen
  const { children } = props;
  return <main className="flex-1 flex flex-col">{children}</main>;
}
