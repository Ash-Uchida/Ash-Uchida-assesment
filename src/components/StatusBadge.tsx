import type { MemberStatus } from "../data/members";

const styles: Record<MemberStatus, string> = {
  Active: "bg-success-bg text-success-text",
  "Follow-Up": "bg-warn/10 text-warn",
  "On Leave": "bg-brand-tint text-muted",
};

export default function StatusBadge({ status }: { status: MemberStatus }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold leading-[15px] ${styles[status]}`}
    >
      {status}
    </span>
  );
}
