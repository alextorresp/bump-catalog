'use client';

import MinusIcon from '@/components/icons/MinusIcon';
import CheckmarkIcon from '@/components/icons/CheckmarkIcon';
import LoadingIcon from '@/components/icons/LoadingIcon';
import { useGlobalContext } from '@/context/GlobalContext';

type SubtractFromListButton = {
  onClick: () => void; 
  isSubtracted: boolean;
  isLoading: boolean;
};

export default function SubtractFromListButton({ onClick, isSubtracted, isLoading }: SubtractFromListButton) {

  return (
    <button
      className={`group rounded-full flex items-center justify-center w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 relative hover:bg-green-600 transition-all ${
        isSubtracted || isLoading ? 'bg-green-600' : 'bg-black'
      } `}
      onClick={onClick}
      // disabled={subtractingFromList}
    >
      <MinusIcon
        classNames={`transiton-all group-hover:fill-white ${(isSubtracted || isLoading) ? 'text-white opacity-0' : 'text-black opacity-1'}`}
        fill='white'
      />
      <CheckmarkIcon 
        classNames={`absolute flex items-center justify-center transition-all ${(isSubtracted && !isLoading) ? 'opacity-1' : 'opacity-0'}`}
        fill='white'
      />
      <LoadingIcon 
        classNames={`absolute flex items-center justify-center transition-all ${(!isSubtracted && isLoading) ? 'opacity-1 animate-spin' : 'opacity-0'}`}
        fill='white'
      />
    </button>
  );
};
