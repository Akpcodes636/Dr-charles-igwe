import React from "react";

interface CheckButtonProps {
  name: string;
  title: string;
  value: string;
  layout?: "horizontal" | "vertical";
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({
  name,
  title,
  value,
  layout = "horizontal",
  checked = false,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`flex ${layout === "horizontal" ? "items-center gap-x-2" : "flex-col gap-y-2"} mb-[16px]`}
    >
      <div className="relative">
        <input
          type="checkbox"
        //   id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          //   className="sr-only peer" // Hide the default radio but keep it accessible
        />
        <label
        //   htmlFor={id}
          //   className="relative flex items-center justify-center w-[22px] h-[22px] border-2 border-[#B0D9E9] rounded-[10px] cursor-pointer"
        >
          {/* The inner circle that appears when checked */}
          {/* <span className={` rounded-full transition-colors duration-200 ${checked ? 'bg-[#0094D2]' : 'bg-[#CCF0FF]'}`}></span> */}
        </label>
      </div>
      <label
        // htmlFor={id}
        className="text-[16px] md:text-[14px] font-normal text-[#38383899] leading-[100%]"
      >
        {title}
      </label>
    </div>
  );
};

export default CheckButton;
