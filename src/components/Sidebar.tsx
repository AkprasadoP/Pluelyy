import { SparklesIcon } from "lucide-react";
import { Button } from "@/components";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { openUrl } from "@tauri-apps/plugin-opener";
import { useMenuItems, useVersion } from "@/hooks";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const { version, isLoading } = useVersion();
  const { menu, footerLinks, footerItems } = useMenuItems();

  const navigate = useNavigate();
  const activeRoute = useLocation().pathname;
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex w-[220px] flex-col select-none rounded-2xl glass-panel z-10 shrink-0"
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/dashboard")}
        className="flex h-16 items-center px-4 pt-10 gap-1.5"
      >
        <div className="flex size-6 lg:size-7 items-center justify-center rounded-lg bg-primary">
          <SparklesIcon className="size-4 lg:size-5 text-primary-foreground transition-all duration-300" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xs lg:text-md font-semibold text-foreground transition-all duration-300">
            Pluely
          </h1>
          <span className="text-[8px] lg:text-[10px] text-muted-foreground -mt-1 block">
            {isLoading ? "Loading..." : `(v${version})`}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5 px-3 py-6 overflow-y-auto">
        {menu.map((item, index) => {
          const isActive = activeRoute.includes(item.href);
          return (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.href)}
              key={`${item.label}-${index}`}
              className={cn(
                "relative flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-300",
                isActive
                  ? "font-medium text-primary-foreground bg-primary/90 shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                  : "text-foreground/70 hover:bg-foreground/5"
              )}
            >
              <div className="flex items-center gap-3 relative z-10">
                <item.icon className={cn("size-4 transition-all duration-300", isActive ? "text-primary-foreground" : "text-foreground/60")} />
                {item.label}
              </div>
              {item.count ? (
                <span className={cn(
                  "flex h-5 min-w-5 items-center justify-center rounded-md px-1.5 text-[10px] font-bold z-10",
                  isActive ? "bg-black/20 text-white" : "bg-foreground/10 text-foreground"
                )}>
                  {item.count}
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </nav>

      <div className="flex flex-col space-y-1 px-3 pb-4">
        <div className="flex flex-row justify-evenly items-center gap-2 mb-3">
          {footerLinks.map((item, index) => (
            <Button
              key={`${item.title}-${index}`}
              title={item.title}
              size="sm"
              variant="outline"
              onClick={() => openUrl(item.link)}
            >
              <item.icon className="size-3 lg:size-4 transition-all duration-300" />
            </Button>
          ))}
        </div>

        {footerItems.map((item, index) => (
          <a
            href={item.href}
            onClick={item.action}
            target="_blank"
            rel="noopener noreferrer"
            key={`${item.label}-${index}`}
            className={cn(
              "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm text-foreground/70 transition-all duration-300 hover:bg-foreground/5 hover:text-foreground"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className="size-4 transition-all duration-300" />
              {item.label}
            </div>
          </a>
        ))}
      </div>
    </motion.aside>
  );
};
