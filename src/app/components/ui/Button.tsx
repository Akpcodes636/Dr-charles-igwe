"use client";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  fn?: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: "danger" | "nobg" | "border";
  css?: string; // Individual CSS per button
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fn,
  loading,
  disabled,
  style = "danger", // default style
  css = "",         // default empty
}) => {
  const baseStyles =
    "flex items-center justify-center whitespace-nowrap font-medium duration-150 ease-in-out";

  // Conditional style classes
  const styleClasses = {
    danger:
      "bg-accent text-white rounded-[5px] cursor-pointer border-[1px] border-white hover:bg-accent/90",
    nobg:
      "bg-transparent border-[2px] border-white text-white rounded-[5px] cursor-pointer hover:bg-white hover:text-black",
    border:
      "border-[1px] border-black rounded-[5px] cursor-pointer hover:bg-black hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={fn}
      disabled={loading || disabled}
      className={`${baseStyles} ${styleClasses[style]} ${css}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
