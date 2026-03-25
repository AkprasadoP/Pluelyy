import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-xl border px-3 py-1 text-base shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "bg-white/5 dark:bg-black/40 backdrop-blur-xl border-black/10 dark:border-white/10 hover:bg-white/10 dark:hover:bg-black/60",
        "focus-visible:border-primary/50 focus-visible:ring-primary/40 focus-visible:ring-[3px] focus-visible:shadow-[0_0_20px_rgba(var(--primary),0.2),inset_0_1px_4px_rgba(0,0,0,0.1)] focus-visible:bg-white/10 dark:focus-visible:bg-black/60",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      {...props}
    />
  );
}

export { Input };
