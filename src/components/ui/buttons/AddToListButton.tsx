import AddIcon from '@/components/icons/AddIcon';
import CheckmarkIcon from '@/components/icons/CheckmarkIcon';

type AddToListButtonProps = {
  onClick: () => void; 
  isAdded: boolean;
};

export default function AddToListButton({ onClick, isAdded }: AddToListButtonProps) {

  return (
    <button
      className={`group rounded-full flex items-center justify-center w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 relative hover:bg-red-400 transition-all ${
        isAdded ? 'bg-green-600' : 'bg-white'
      }`}
      onClick={onClick}
    >
      <AddIcon
        classNames={`transiton-all group-hover:fill-white ${isAdded ? 'text-white opacity-0' : 'text-black opacity-1'}`}
        fill='black'
      />
      <CheckmarkIcon 
        classNames={`absolute flex items-center justify-center transition-all ${isAdded ? 'opacity-1' : 'opacity-0'}`}
        fill='white'
      />
    </button>
  );
};
