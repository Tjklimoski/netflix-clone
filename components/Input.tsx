interface InputProps {
  id: string;
  onChange: () => void;
  value: string;
  type?: string;
  label: string;
}

export default function Input({
  id,
  onChange,
  value,
  type,
  label,
}: InputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-inherit bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 left-6 z-10 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
}
