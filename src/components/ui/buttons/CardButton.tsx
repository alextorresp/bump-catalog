type CardButtonProps = {
  className?: string;
  text: string;
};

export default function CardButton({ className, text }: CardButtonProps) {
  return (
    <button className={`border button-text text-white font-light rounded-lg py-1 px-2 ${className}`}>
      {text}
    </button>
  )
};