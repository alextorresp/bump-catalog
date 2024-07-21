import { SearchType } from '@/utils/types';

type ListItemProps = {
  key: string;
  value: SearchType;
  isSelected: boolean; 
  handleDropdownChange: (value: SearchType) => void;
};

export default function ListItem({ key, value, isSelected, handleDropdownChange }: ListItemProps) {
  
  return (
    <li
      key={key}
      role='option'
      aria-selected={isSelected}
      onClick={() => handleDropdownChange(value)}
      className={`cursor-pointer hover:bg-gray-300 py-1 first:pt-2 last:pb-2 text-center responsive-text px-2.5 ${isSelected ? 'bg-slate-200' : ''}`}
    >
      {value}
    </li>
  )
};