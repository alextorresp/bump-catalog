'use client';

import AddIcon from '@/components/icons/AddIcon';
import CheckmarkIcon from '@/components/icons/CheckmarkIcon';
import LoadingIcon from '@/components/icons/LoadingIcon';
import { useGlobalContext } from '@/context/GlobalContext';

type AddToListButtonProps = {
  onClick: () => void; 
  isAdded: boolean;
  isLoading: boolean;
};

export default function AddToListButton({ onClick, isAdded, isLoading }: AddToListButtonProps) {
  const { addingToList } = useGlobalContext();

  return (
    <button
      className={`group rounded-full flex items-center justify-center w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 relative hover:bg-green-600 transition-all ${
        isAdded || isLoading ? 'bg-green-600' : 'bg-white'
      } `}
      onClick={onClick}
      disabled={addingToList}
    >
      <AddIcon
        classNames={`transiton-all group-hover:fill-white ${(isAdded || isLoading) ? 'text-white opacity-0' : 'text-black opacity-1'}`}
        fill='black'
      />
      <CheckmarkIcon 
        classNames={`absolute flex items-center justify-center transition-all ${(isAdded && !isLoading) ? 'opacity-1' : 'opacity-0'}`}
        fill='white'
      />
      <LoadingIcon 
        classNames={`absolute flex items-center justify-center transition-all ${(!isAdded && isLoading) ? 'opacity-1 animate-spin' : 'opacity-0'}`}
        fill='white'
      />
    </button>
  );
};
