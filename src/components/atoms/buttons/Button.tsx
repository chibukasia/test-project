interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary" | "danger" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?: string;
  loading?: boolean;
  loadingText?: string;
}

export default function Button(props: ButtonProps) {
  const {
    title,
    variant,
    onClick,
    disabled,
    type,
    size,
    rounded,
    color,
    loading,
    loadingText,
  } = props;
  return (
    <button
      className={`${variant === "primary" ? "bg-green-500 text-white" : variant === "secondary" ? "bg-blue-500 text-white" : variant === "danger" ? "bg-red-500 text-white" : variant === "outline" ? "bg-transparent border border-gray-600 text-black" :"bg-green-500 text-white"}  px-2 py-1`}
      onClick={onClick}
      style={{
        padding: size === 'small' ? '5px 10px' : size === 'medium' ? '10px 20px' : size==='large' ? '20px 40px': '10px 20px',
        borderRadius: rounded === 'sm' ? '4px' : rounded === 'md' ? '8px' : rounded === 'lg' ? '16px' : rounded === 'xl' ? '24px': rounded==='2xl'? '32px' : '8px',
        color: color ?? '',
        opacity: loading || disabled ? 0.5 : 1,

        
    }}
      disabled={disabled}
      type={type ?? 'button'}
      
    >
      {loading ? loadingText ??'Loading...': title}
    </button>
  );
}
