import { Bell, ChevronRight, Moon, Shield, UserCog } from "lucide-react";
import AppShell from "../components/AppShell";
import BottomNav from "../components/BottomNav";
import TopAppBar from "../components/TopAppBar";

const rows = [
  { icon: UserCog, label: "Account", hint: "Profile & role" },
  { icon: Bell, label: "Notifications", hint: "Email & push" },
  { icon: Moon, label: "Appearance", hint: "Light" },
  { icon: Shield, label: "Privacy & Security", hint: "" },
];

export default function Settings() {
  return (
    <AppShell header={<TopAppBar title="TalentFlow" />}>
      <div className="flex flex-col gap-8 px-4 pt-4">
        <section className="flex flex-col gap-1">
          <h1 className="font-display text-[24px] font-semibold leading-8 text-ink">Settings</h1>
          <p className="text-[14px] leading-5 text-muted">
            Manage your preferences and account.
          </p>
        </section>

        <section className="overflow-hidden rounded-card border border-line/20 bg-white shadow-card">
          <div className="divide-y divide-line/30">
            {rows.map(({ icon: Icon, label, hint }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-brand/5"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-[16px] leading-6 text-ink">{label}</span>
                  {hint && <span className="text-[13px] leading-[18px] text-muted">{hint}</span>}
                </div>
                <ChevronRight size={18} className="text-faint" />
              </button>
            ))}
          </div>
        </section>
      </div>

      <BottomNav active="settings" />
    </AppShell>
  );
}
