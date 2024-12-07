import AddIcon from '@/components/icons/AddIcon'

type AddToListButtonProps = {
  onClick: () => void; 
}

export default function AddToListButton({onClick}: AddToListButtonProps) {
  return (
    <button className='rounded-full bg-white flex items-center justify-center w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' onClick={onClick}>
      <AddIcon classNames='' fill='black' />
    </button>
  );
};
