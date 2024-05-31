
const Button = ({ onClick, disabled, children, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-10 font-bold text-center text-white bg-cyan-800 w-24 rounded-2xl ${
        disabled && "opacity-50 cursor-not-allowed"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
