interface InputProps {
  type?: string;
  label: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  error?: string;
}

export default function Input(props: InputProps) {
  const { type, label, onChange, placeholder, width, height, error, name } =
    props;

  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={name} className="font-light">{label}</label>
      </div>
      <div>
        <input
          type={type ?? "text"}
          name={name ?? ""}
          placeholder={placeholder ?? "Type here..."}
          onChange={onChange}
          style={{ 
            width: width ?? "100%", 
            height: height ?? "40px",
            borderWidth: "1px",
            borderColor: "black",
            borderRadius: "10px",
            backgroundColor: 'transparent',
            color: 'black',
            padding: '10px',
         }}
        />
        {error && <p className="text-xs text-red-500 px-1">{error}</p>}
      </div>
    </div>
  );
}
