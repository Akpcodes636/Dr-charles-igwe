interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  css?: string;
  value: string;
  type?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  name,
  label,
  value,
  css,
  onChange,
  checked = false,
  type = "text",
  error
}) => {
  return (
    <div className="flex flex-col gap-y-[4px] mb-[16px] w-full">
      <label
        className="block text-[14px] font-normal text-[#00000099] leading-[100%]"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="relative w-full">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          checked={checked}
          onChange={onChange}
          className={`h-[48px] w-full border border-[#00000033] rounded-[5px] px-[16px] text-[16px] leading-[100%] text-[#0000004D] ${css}`}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
