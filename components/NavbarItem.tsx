interface NavbarItemProps {
  label: string;
}

export default function NavbarItem({ label }: NavbarItemProps) {
  return (
    <div className="cursor-pointer hover:text-gray-300 transition">{label}</div>
  );
}
