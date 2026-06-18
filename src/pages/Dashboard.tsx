import {
  AlertTriangle,
  BarChart3,
  Check,
  ChevronDown,
  TrendingUp,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import AppShell from "../components/AppShell";
import BottomNav from "../components/BottomNav";
import TopAppBar from "../components/TopAppBar";
import { dashboardActivity, type DashboardActivity } from "../data/members";

const activityIcon = {
  check: Check,
  alert: AlertTriangle,
  "user-plus": UserPlus,
  trending: TrendingUp,
} as const;

const toneStyles: Record<DashboardActivity["tone"], string> = {
  brand: "bg-brand/10 text-brand",
  warn: "bg-warn/10 text-warn",
  tint: "bg-brand-tint text-brand",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-label text-[12px] font-medium uppercase tracking-[0.6px] text-muted">
      {children}
    </p>
  );
}

export default function Dashboard() {
  return (
    <AppShell header={<TopAppBar title="TalentFlow" />}>
      <div className="flex flex-col gap-8 px-4 pt-4">
        {/* Welcome header */}
        <section className="flex flex-col gap-1">
          <h1 className="font-display text-[24px] font-semibold leading-8 text-ink">
            Recruiter Dashboard
          </h1>
          <p className="text-[14px] leading-5 text-muted">
            Review the current performance and status of your TA team.
          </p>
        </section>

        {/* Metrics bento grid */}
        <section className="flex flex-col gap-6">
          {/* Card 1 — Total Members */}
          <article className="flex flex-col gap-4 rounded-card border border-line/30 bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <SectionLabel>Total Members</SectionLabel>
              <Users size={20} className="text-brand" strokeWidth={2} />
            </div>
            <p className="font-display text-[48px] font-bold leading-[56px] tracking-[-0.96px] text-ink">
              8
            </p>
            <div className="flex items-center gap-1 text-brand">
              <TrendingUp size={14} strokeWidth={2.5} />
              <span className="text-[14px] font-medium leading-5">+1 this month</span>
            </div>
          </article>

          {/* Card 2 — Follow-Ups */}
          <article className="flex flex-col gap-4 rounded-card border-l-4 border-warn bg-white py-6 pl-7 pr-6 shadow-card">
            <div className="flex items-center justify-between">
              <SectionLabel>Follow-Ups Required</SectionLabel>
              <AlertTriangle size={18} className="text-warn" strokeWidth={2} />
            </div>
            <p className="font-display text-[48px] font-bold leading-[56px] tracking-[-0.96px] text-warn">
              3
            </p>
            <p className="text-[14px] leading-5 text-muted">Urgent attention needed</p>
          </article>

          {/* Card 3 — Avg Performance */}
          <article className="flex flex-col gap-4 rounded-card border border-line/30 bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <SectionLabel>Avg. Performance</SectionLabel>
              <BarChart3 size={18} className="text-brand" strokeWidth={2} />
            </div>
            <p className="font-display font-bold leading-[56px] tracking-[-0.96px] text-ink">
              <span className="text-[48px]">88</span>
              <span className="text-[32px] text-muted">%</span>
            </p>
            <div className="h-2 w-full overflow-hidden rounded-full bg-brand-soft">
              <div className="h-full rounded-full bg-brand" style={{ width: "88%" }} />
            </div>
          </article>

          {/* Card 4 — Recent Summary (accent) */}
          <article className="flex flex-col gap-4 rounded-card bg-brand p-6 text-white shadow-floaty">
            <div className="flex items-center justify-between">
              <p className="font-label text-[12px] font-medium uppercase tracking-[0.6px] text-white/80">
                Recent Activity
              </p>
              <Zap size={20} strokeWidth={2} className="text-white" />
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white" />
                <span className="text-[14px] leading-5">2 new submissions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white/60" />
                <span className="text-[14px] leading-5">1 score update</span>
              </li>
            </ul>
            <button
              type="button"
              className="w-fit border-b border-white pb-0.5 font-label text-[12px] font-medium tracking-[0.6px]"
            >
              VIEW ALL LOGS
            </button>
          </article>
        </section>

        {/* Activity stream */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[20px] font-semibold leading-7 text-ink">
              Activity Stream
            </h2>
            <button
              type="button"
              className="flex items-center gap-1 font-label text-[12px] font-medium tracking-[0.6px] text-brand"
            >
              Filter
              <ChevronDown size={14} strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {dashboardActivity.map((item) => {
              const Icon = activityIcon[item.icon];
              return (
                <article
                  key={item.id}
                  className="flex gap-4 rounded-card border border-line/20 bg-white p-[17px] shadow-card"
                >
                  <div
                    className={`grid size-10 shrink-0 place-items-center rounded-full ${toneStyles[item.tone]}`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={`font-sans text-[16px] font-semibold leading-6 ${
                          item.titleTone === "warn" ? "text-warn" : "text-ink"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="shrink-0 whitespace-nowrap font-label text-[13px] leading-[18px] text-muted">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-[14px] leading-5 text-muted">{item.body}</p>

                    {item.tag && (
                      <span className="mt-1 w-fit rounded-full bg-brand/10 px-2.5 py-0.5 text-[12px] leading-4 text-brand">
                        {item.tag}
                      </span>
                    )}

                    {item.actions && (
                      <div className="mt-2 flex gap-2">
                        {item.actions.map((action) => (
                          <button
                            key={action.label}
                            type="button"
                            className={`rounded-lg px-3 py-1 font-label text-[12px] font-medium tracking-[0.6px] ${
                              action.variant === "primary"
                                ? "bg-brand text-white"
                                : "bg-brand-soft text-ink"
                            }`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <BottomNav active="dashboard" />
    </AppShell>
  );
}
