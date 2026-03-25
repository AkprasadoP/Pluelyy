import { Sidebar } from "@/components";
import { Outlet, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorLayout } from "./ErrorLayout";
import { AnimatePresence, motion } from "framer-motion";

export const DashboardLayout = () => {
  const location = useLocation();

  return (
    <ErrorBoundary
      fallbackRender={() => {
        return <ErrorLayout />;
      }}
      resetKeys={["dashboard-error"]}
      onReset={() => {
        console.log("Reset");
      }}
    >
      <div className="relative flex h-screen w-screen overflow-hidden bg-black/20 dark:bg-black/50 backdrop-blur-[40px] p-4 gap-4">
        {/* Ambient background blur for the desktop window (optional, can be very slight) */}
        
        {/* Draggable region for Tauri */}
        <div
          className="absolute left-0 right-0 top-0 z-50 h-8 select-none"
          data-tauri-drag-region={true}
        />

        {/* Sidebar as a floating panel */}
        <Sidebar />
        
        {/* Main Content as a floating glass panel */}
        <main className="flex flex-1 flex-col overflow-hidden rounded-3xl glass-panel relative z-10 border border-white/10 dark:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col overflow-hidden h-full w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </ErrorBoundary>
  );
};
