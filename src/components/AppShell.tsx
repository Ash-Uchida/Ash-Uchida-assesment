import type { ReactNode } from "react";

interface AppShellProps {
  header: ReactNode;
  children: ReactNode;
  /** Reserve space at the bottom so content clears the fixed nav bar. */
  withBottomNav?: boolean;
}

/**
 * Phone-style device frame that hosts a single screen. The header is sticky,
 * the content scrolls, and screens render their own BottomNav so the active
 * tab can differ per route.
 */
export default function AppShell({ header, children, withBottomNav = true }: AppShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eef0f6] p-0 sm:p-6">
      <div className="relative flex h-screen w-full max-w-[420px] flex-col overflow-hidden bg-canvas sm:h-[860px] sm:rounded-[40px] sm:border-[10px] sm:border-[#1c1c28] sm:shadow-2xl">
        {/* Sticky top app bar */}
        <div className="sticky top-0 z-20 shrink-0">{header}</div>

        {/* Scrollable screen content */}
        <main
          className={`app-scroll flex-1 overflow-y-auto ${
            withBottomNav ? "pb-28" : "pb-6"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
