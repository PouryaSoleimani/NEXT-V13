import { HiHome } from "react-icons/hi";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center text-4xl space-y-6 ">
      <h2 className="bg-red-800/30 w-fit px-8 py-4 font-bold rounded-xl ">🟥 404 | Not Found</h2>
      <p className="bg-zinc-800/20 px-10 py-4 rounded-xl font-bold">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="bg-blue-400/20 px-8 py-2 cursor-pointer hover:bg-orange-500 rounded-xl font-bold flex items-center gap-3"
      >
        <HiHome className="-translate-y-1" /> Return Home
      </Link>
    </div>
  );
}
