export default function Experience({ title, subtitle, children }) {
  return (
    <article className="pt-8 pb-2">
      <h3 className="font-semibold text-md ">{title}</h3>
      <h4 className="text-slate-400 text-sm">{subtitle}</h4>
      <p>{children}</p>
    </article>
  );
}
