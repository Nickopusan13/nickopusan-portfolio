import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-svh bg-amber-900 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-3 text-white font-black">
        <h1 className="text-6xl">PAGE NOT FOUND</h1>
        <h2 className="text-2xl">
          PLEASE REFRESH THE PAGE OR GO CLICK LINK BELOW
        </h2>
      </div>
      <Link
        href="/"
        className="bg-amber-300 text-3xl px-6 py-3 border-3 shadow-[4px_4px_0px_#000] rounded-xl hover:scale-110 duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
