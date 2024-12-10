export default function MinorProject({ title, children, icons }) {
  return (
    <article className="w-full grid-cols-1 border-2 h-36 border-slate-700 rounded-lg p-8 hover:scale-105 transition-all cursor-pointer">
      <h3 className="font-semibold text-md ">{title}</h3>
      <p>{children}</p>
      <div>{icons}</div>
    </article>
  );
}