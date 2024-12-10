export default function CustomButton({ children, text, background, to }) {
  return (
    <a
      href={to}
      className="py-2 px-4 block max-w-fit text-black font-bold rounded-md my-4 bg-white hover:scale-105 transition-all select-none hover:cursor-pointer"
    >
      {children}
    </a>
  );
}
