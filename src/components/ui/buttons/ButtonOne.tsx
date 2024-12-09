'use client';

import Link from 'next/link';

type ButtonOneProps = {
  text: string;
  className: string;
  onClick?: () => void;
  link?: string;  
};

export default function ButtonOne({ text, onClick, link, className }: ButtonOneProps) {
  if (link) {
    return (
      <Link href={link} className={`${className} border-black border border-dashed rounded-full py-1 px-3 text-black transition-all ease-in`}>
          {text}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${className} border-black border border-dashed rounded-full py-1 px-3 text-black transition-all ease-in`}
    >
      {text}
    </button>
  );
}
