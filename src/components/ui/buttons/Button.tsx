import { cn } from '@/utils/helpers';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'rounded-full py-1 px-3 transition-all ease-in border z-10 border-dashed border-black text-black bg-white hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white',
  {
    variants: {
      variant: {
        outline: 
        '',
        solid: 
        'border-white hover:border-white focus:border-white'
      },
      size: {
        auto: 
        'w-auto',
        standard: 
        'w-[100px] md:w-[150px]'
      }
    },
    defaultVariants: {
      variant: 'outline',
      size: 'auto'
    }
  }
);

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {};

export default function Button({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
};