import { Bell, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopAppBarProps {
  /** Brand label shown on the left ("TalentFlow" or compact "TF"). */
  title?: string;
  /** When set, shows a back chevron that navigates to this route. */
  backTo?: string;
  /** Initials for the right-hand profile chip. */
  avatarInitials?: string;
}

export default function TopAppBar({
  title = "TalentFlow",
  backTo,
  avatarInitials = "TB",
}: TopAppBarProps) {
  const navigate = useNavigate();

  return (
    <header className="flex h-16 w-full items-center justify-between bg-canvas px-4 shadow-header">
      <div className="flex items-center gap-4">
        {backTo && (
          <button
            type="button"
            onClick={() => navigate(backTo)}
            aria-label="Go back"
            className="grid size-6 place-items-center text-brand transition-colors hover:text-brand-500"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
        )}
        <span className="font-display text-[24px] font-bold leading-8 text-brand">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="grid size-8 place-items-center text-muted transition-colors hover:text-ink"
        >
          <Bell size={18} strokeWidth={2} />
        </button>
        <div className="grid size-8 place-items-center rounded-full border-2 border-brand-500 bg-brand-500 text-[12px] font-bold text-white">
          {avatarInitials}
        </div>
      </div>
    </header>
  );
}
