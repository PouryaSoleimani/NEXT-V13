import * as React from "react";
import { useController } from "react-hook-form";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        "file:text-foreground data-[state=valid]:border-emerald-900 bg-stone-900  font-vazir focus-within:border-stone-800 placeholder:text-stone-300  placeholder:font-sans selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-transparent flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-stone-700",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "placeholder:opacity-30",
        className
      )}
      {...props}
    />
  );
}

export { Input };
