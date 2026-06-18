import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";
import Avatar from "../components/Avatar";
import BottomNav from "../components/BottomNav";
import StatusBadge from "../components/StatusBadge";
import TopAppBar from "../components/TopAppBar";
import { members, type Member } from "../data/members";

const INITIAL_VISIBLE = 4;

function MemberCard({ member }: { member: Member }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <Avatar initials={member.initials} size={40} />
          <div className="flex flex-col">
            <span className="font-display text-[16px] leading-6 text-ink">{member.name}</span>
            <span className="font-sans text-[12px] font-medium leading-4 tracking-[0.6px] text-muted">
              {member.code} • {member.role}
            </span>
          </div>
        </div>
        <StatusBadge status={member.status} />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-[10px] uppercase leading-[15px] tracking-[-0.25px] text-muted">
            Performance
          </span>
          <span className="font-label text-[16px] leading-6 text-ink">{member.performance}%</span>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-[10px] uppercase leading-[15px] tracking-[-0.25px] text-muted">
            Last Activity
          </span>
          <span className="font-label text-[16px] leading-6 text-ink">{member.lastActivity}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => navigate(`/members/${member.id}`)}
        className="w-full rounded-lg bg-brand-400 py-3 text-center font-label text-[16px] text-white transition-colors hover:bg-brand"
      >
        Member Detail
      </button>
    </div>
  );
}

function StatCard({
  label,
  value,
  valueClass,
  trailing,
}: {
  label: string;
  value: string;
  valueClass: string;
  trailing: React.ReactNode;
}) {
  return (
    <article className="flex flex-col gap-2.5 rounded-card border border-line/30 bg-white px-6 pb-6 pt-7 shadow-card">
      <p className="font-sans text-[12px] font-medium uppercase leading-4 tracking-[0.6px] text-muted">
        {label}
      </p>
      <div className="flex items-end gap-2">
        <span className={`font-display font-bold leading-[56px] tracking-[-0.96px] ${valueClass}`}>
          {value}
        </span>
        <span className="pb-2">{trailing}</span>
      </div>
    </article>
  );
}

export default function MemberList() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? members : members.slice(0, INITIAL_VISIBLE);
  const remaining = members.length - INITIAL_VISIBLE;

  return (
    <AppShell header={<TopAppBar title="TF" />}>
      <div className="flex flex-col gap-8 px-4 pt-4">
        {/* Page header / actions */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="font-display text-[24px] font-semibold leading-8 text-ink">
              Team Overview
            </h1>
            <p className="text-[14px] leading-5 text-muted">
              Managing {members.length} active Technical Assistants
            </p>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-[16px] text-white transition-colors hover:bg-brand-500"
          >
            <Plus size={16} strokeWidth={2.5} />
            Add Member
          </button>
        </section>

        {/* Stats summary */}
        <section className="flex flex-col gap-6">
          <StatCard
            label="Average Performance"
            value="89%"
            valueClass="text-brand text-[48px]"
            trailing={
              <span className="text-[16px] font-bold leading-6 text-warn-deep">↑ 3%</span>
            }
          />
          <StatCard
            label="Active Status"
            value="6/8"
            valueClass="text-ink text-[48px]"
            trailing={<span className="text-[16px] leading-6 text-muted">Online</span>}
          />
        </section>

        {/* Member list */}
        <section className="overflow-hidden rounded-card border border-line/20 bg-white shadow-card">
          <div className="divide-y divide-line/30">
            {visible.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {!showAll && remaining > 0 && (
            <div className="border-t border-line/30 px-4 py-4 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="rounded-lg px-4 py-2 text-[16px] text-brand transition-colors hover:bg-brand/5"
              >
                Show {remaining} more members
              </button>
            </div>
          )}
        </section>
      </div>

      <BottomNav active="members" />
    </AppShell>
  );
}
