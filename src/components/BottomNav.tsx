import { LayoutGrid, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavKey = "dashboard" | "members" | "settings";

const items: { key: NavKey; label: string; to: string; icon: typeof Users }[] = [
  { key: "dashboard", label: "Dashboard", to: "/", icon: LayoutGrid },
  { key: "members", label: "Members", to: "/members", icon: Users },
  { key: "settings", label: "Settings", to: "/settings", icon: Settings },
];

export default function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 border-t border-line bg-canvas/95 shadow-floaty backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2">
        {items.map(({ key, label, to, icon: Icon }) => {
          const isActive = key === active;
          return (
            <NavLink
              key={key}
              to={to}
              className="relative flex flex-col items-center gap-1 px-3 py-1"
            >
              {isActive && (
                <span className="absolute -top-2 h-1 w-8 rounded-full bg-brand" />
              )}
              <Icon
                size={20}
                strokeWidth={2}
                className={isActive ? "text-brand" : "text-muted"}
              />
              <span
                className={`font-label text-[12px] tracking-[0.6px] ${
                  isActive ? "text-brand" : "text-muted"
                }`}
              >
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
