interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`max-w-6xl m-auto ${className}`}>
      <span className="h-1 w-full bg-primary-100 block my-20 rounded-lg bg-gradient-to-r from-primary-100 to-primary-300"></span>
    </div>
  );
}
