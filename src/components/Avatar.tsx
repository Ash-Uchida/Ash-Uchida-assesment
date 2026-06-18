interface AvatarProps {
  initials: string;
  size?: number;
  className?: string;
}

/**
 * Initials avatar. Self-contained (no remote images) so the UI renders
 * identically offline and never depends on expiring asset URLs.
 */
export default function Avatar({ initials, size = 40, className = "" }: AvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand/10 font-sans font-bold text-brand ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.35 }}
    >
      {initials}
    </div>
  );
}
