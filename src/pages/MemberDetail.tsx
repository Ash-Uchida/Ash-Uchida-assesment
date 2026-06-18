import { Calendar, FileCheck, Mail, Save } from "lucide-react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AppShell from "../components/AppShell";
import Avatar from "../components/Avatar";
import BottomNav from "../components/BottomNav";
import TopAppBar from "../components/TopAppBar";
import { getMember, type ActivityEntry, type MemberStatus } from "../data/members";

const activityIcon: Record<ActivityEntry["type"], typeof Mail> = {
  graded: FileCheck,
  session: Calendar,
  email: Mail,
};

const statusConfig: Record<
  MemberStatus,
  { label: string; pill: string; dot: string }
> = {
  Active: { label: "Active", pill: "bg-success-bg text-success-text", dot: "bg-success-text" },
  "Follow-Up": { label: "Needs Follow-Up", pill: "bg-warn-bg text-warn-text", dot: "bg-warn-dot" },
  "On Leave": { label: "On Leave", pill: "bg-brand-tint text-muted", dot: "bg-faint" },
};

function Card({ children }: { children: React.ReactNode }) {
  return <section className="rounded-card bg-white p-6 shadow-card">{children}</section>;
}

export default function MemberDetail() {
  const { id } = useParams();
  const member = id ? getMember(id) : undefined;
  const [note, setNote] = useState("");

  if (!member) return <Navigate to="/members" replace />;

  const status = statusConfig[member.status];
  const maxValue = Math.max(...member.history.map((h) => h.value));

  return (
    <AppShell
      header={<TopAppBar title="TalentFlow" backTo="/members" avatarInitials={member.initials} />}
    >
      <div className="flex flex-col gap-4 px-4 pt-4">
        {/* Profile header */}
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="rounded-full border-4 border-[#f2f3ff] p-1 shadow-sm">
                <Avatar initials={member.initials} size={88} />
              </div>
              <span
                className={`absolute bottom-1 right-1 size-6 rounded-full border-2 border-white ${status.dot}`}
              />
            </div>
            <h1 className="mt-4 font-display text-[24px] font-semibold leading-8 text-ink">
              {member.name}
            </h1>
            <p className="mt-1 font-label text-[13px] uppercase leading-[18px] tracking-[0.65px] text-muted">
              ID: {member.code}
            </p>
            <span
              className={`mt-3 flex items-center gap-2 rounded-full px-3 py-1 ${status.pill}`}
            >
              <span className={`size-2 rounded-full ${status.dot}`} />
              <span className="font-label text-[12px] font-medium tracking-[0.6px]">
                {status.label}
              </span>
            </span>
          </div>
        </Card>

        {/* Performance history */}
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[20px] font-semibold leading-7 text-ink">
              Performance
            </h2>
            <span className="font-label text-[12px] font-bold tracking-[0.6px] text-brand">
              Trend {member.trend}
            </span>
          </div>

          <div className="mt-6 flex h-32 items-end justify-between gap-4">
            {member.history.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
                <span
                  className={`font-label text-[16px] leading-6 ${
                    point.highlight ? "font-bold text-brand" : "text-muted"
                  }`}
                >
                  {point.value}%
                </span>
                <div className="flex w-full items-end justify-center">
                  <div
                    className={`w-full max-w-[48px] rounded-t-lg ${
                      point.highlight ? "bg-brand" : "bg-brand-soft"
                    }`}
                    style={{ height: `${(point.value / maxValue) * 80}px` }}
                  />
                </div>
                <span
                  className={`font-label text-[12px] tracking-[0.6px] ${
                    point.highlight ? "font-bold text-ink" : "font-medium text-faint"
                  }`}
                >
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent activity */}
        <Card>
          <h2 className="font-display text-[20px] font-semibold leading-7 text-ink">
            Recent Activity
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {member.activity.map((entry, i) => {
              const Icon = activityIcon[entry.type];
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon size={16} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] leading-5 text-ink">{entry.title}</span>
                    <span className="text-[14px] leading-5 text-muted">{entry.timestamp}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Follow-up notes */}
        <Card>
          <h2 className="font-display text-[20px] font-semibold leading-7 text-ink">
            Follow-Up Notes
          </h2>
          <div className="mt-4 flex flex-col gap-5">
            <label className="flex flex-col gap-5">
              <span className="font-label text-[12px] font-medium tracking-[0.6px] text-muted">
                Observation Details
              </span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter candidate evaluation notes or internal feedback here..."
                className="min-h-[120px] w-full resize-y rounded-lg border border-line bg-white p-4 text-[14px] leading-5 text-ink outline-none placeholder:text-[#6b7280] focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </label>
            <button
              type="button"
              className="flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-brand font-label text-[12px] font-medium tracking-[0.6px] text-white transition-colors hover:bg-brand-500"
            >
              <Save size={14} strokeWidth={2} />
              Save Note
            </button>
          </div>
        </Card>
      </div>

      <BottomNav active="members" />
    </AppShell>
  );
}
