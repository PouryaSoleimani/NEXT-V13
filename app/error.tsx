// app/error.tsx
"use client";

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.log("🟥🟥🟥 ERROR", error);

  return (
    <div className="bg-zinc-800 p-10 rounded-xl mx-auto my-10 w-fit space-y-8">
      <h2>Something went wrong!</h2>
      <p className="bg-black/50 text-2xl font-black tracking-tight text-red-800">{error.message}</p>
      <button onClick={() => reset()} className="bg-indigo-700 px-4 py-2 font-black rounded-xl">
        Try again
      </button>
    </div>
  );
}
