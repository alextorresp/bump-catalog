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
      className={`cursor-pointer hover:bg-gray-200 py-0.5 px-2.5 ${isSelected ? 'bg-orange-200' : ''}`}
    >
      {value}
    </li>
  )
};