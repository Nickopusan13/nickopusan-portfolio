import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-amber-900 text-white overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <AiOutlineLoading3Quarters className="animate-spin text-7xl" />
        <h1 className="text-xl font-medium tracking-widest uppercase">
          Please Wait
        </h1>
      </div>
    </main>
  );
}
