const Input = ({
  label,
  type = "text",
  name,
  id,
  onChange,
  value,
  placeholder = "",
}) => {
  return (
    <div className="relative w-full">
      <input
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className="peer border-beta focus:border-primary w-full border-b bg-transparent pt-5 pb-3 text-white transition-all duration-500 ease-in-out outline-none"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="text-alpha pointer-events-none absolute top-0 left-0 text-sm font-medium transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
