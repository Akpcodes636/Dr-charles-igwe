"use client";

interface ButtonProps {
  children: React.ReactNode; // Correct type for children
  type: "button" | "submit" | "reset"; // Can be 'button', 'submit', or 'reset'
  fn?: () => void; // The function to be executed when the button is clicked
  loading?: boolean;
  disabled?: boolean;
  style: "danger" | "nobg";
  css?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fn,
  loading,
  disabled,
  style,
  css,
}) => {
  return (
    <button
      onClick={fn}
      disabled={loading || disabled} // Disable the button when loading or manually disabled
      type={type}
      className={`flex h-14 items-center justify-center whitespace-nowrap  px-[18px] py-[16px] text-[16px] font-medium duration-150 ease-in-out ${css} ${
        style === "danger" &&
        "bg-accent text-white rounded-[5px] text-[16px] font-medium cursor-pointer hover-bg-accent"
      } ${
        style === "nobg" &&
        "border-[2px] border-[#FFFFFF] bg-transparent text-[#FFFFFF] rounded-[5px] cursor-pointer duration-150 ease-in-out hover:bg-[#FFFFFF] hover:text-[#000000]"
      }
       
        `} // Add your button styles here
    >
      {children}
    </button>
  );
};

export default Button;
