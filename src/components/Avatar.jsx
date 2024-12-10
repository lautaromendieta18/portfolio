export default function Avatar() {
  return (
    <div className="rounded-full max-w-40 max-h-40 bg-slate-700 shadow-xl">
      <img
        src="./avatartion.webp"
        alt="Profile picture"
        className="max-w-40 image object-contain rounded-full shadow-xl"
      />
    </div>
  );
}
