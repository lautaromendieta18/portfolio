import CustomButton from "./CustomButton";

export default function ProjectPreview({ title, children, icons, image, to }) {
  return (
    <article className="flex flex-col justify-center items-center md:flex-row md:justify-start gap-10 my-8">
      <aside className="w-[95%] md:w-96 h-56 rounded-md bg-slate-700 overflow-hidden">
        <img
          className="object-scale-down w-96 h-56 translate-x-10 translate-y-10 hover:translate-x-5 hover:translate-y-5 rounded-md hover: transition-all"
          src={image}
          alt="Project Preview"
        />
      </aside>
      <div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="max-w-96">{children}</p>
        {icons}

        <CustomButton to={to}>
          Take a look{" "}
          <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
        </CustomButton>
      </div>
    </article>
  );
}
