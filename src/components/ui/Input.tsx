type AppInputProps = {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AppInput = ({
  type,
  placeholder,
  value,
  onChange,
}: AppInputProps) => {
  return (
    <input
      className="border px-2 py-1 rounded"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
