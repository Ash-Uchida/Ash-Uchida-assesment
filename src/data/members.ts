export type MemberStatus = "Active" | "Follow-Up" | "On Leave";

export interface ActivityEntry {
  type: "graded" | "session" | "email";
  title: string;
  timestamp: string;
}

export interface Member {
  id: string;
  code: string;
  name: string;
  initials: string;
  role: string;
  status: MemberStatus;
  performance: number;
  lastActivity: string;
  trend: string;
  /** Quarterly performance used by the Member Detail mini-chart */
  history: { label: string; value: number; highlight?: boolean }[];
  activity: ActivityEntry[];
}

export const members: Member[] = [
  {
    id: "ta-101",
    code: "TA-101",
    name: "Alex Mercer",
    initials: "AM",
    role: "Senior Recruiter",
    status: "Active",
    performance: 92,
    lastActivity: "Oct 24",
    trend: "+2.1%",
    history: [
      { label: "Q1", value: 84 },
      { label: "Q2", value: 88 },
      { label: "Q3", value: 92, highlight: true },
    ],
    activity: [
      { type: "graded", title: "Submission graded", timestamp: "Oct 24, 2023 • 10:15 AM" },
      { type: "session", title: "Session attended", timestamp: "Oct 22, 2023 • 03:30 PM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 20, 2023 • 09:00 AM" },
    ],
  },
  {
    id: "ta-102",
    code: "TA-102",
    name: "TA Beta",
    initials: "TB",
    role: "TA Associate",
    status: "Follow-Up",
    performance: 78,
    lastActivity: "Oct 23",
    trend: "+4.2%",
    history: [
      { label: "Q1", value: 78 },
      { label: "Q2", value: 82 },
      { label: "Q3", value: 85, highlight: true },
    ],
    activity: [
      { type: "graded", title: "Submission graded", timestamp: "Oct 23, 2023 • 09:45 AM" },
      { type: "session", title: "Session attended", timestamp: "Oct 20, 2023 • 02:00 PM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 18, 2023 • 11:30 AM" },
    ],
  },
  {
    id: "ta-103",
    code: "TA-103",
    name: "David Low",
    initials: "DL",
    role: "Sourcing",
    status: "On Leave",
    performance: 85,
    lastActivity: "Oct 19",
    trend: "+1.4%",
    history: [
      { label: "Q1", value: 80 },
      { label: "Q2", value: 83 },
      { label: "Q3", value: 85, highlight: true },
    ],
    activity: [
      { type: "session", title: "Session attended", timestamp: "Oct 19, 2023 • 01:15 PM" },
      { type: "graded", title: "Submission graded", timestamp: "Oct 16, 2023 • 04:50 PM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 14, 2023 • 10:05 AM" },
    ],
  },
  {
    id: "ta-104",
    code: "TA-104",
    name: "Jamie Wu",
    initials: "JW",
    role: "Talent Lead",
    status: "Active",
    performance: 95,
    lastActivity: "Oct 24",
    trend: "+5.0%",
    history: [
      { label: "Q1", value: 88 },
      { label: "Q2", value: 91 },
      { label: "Q3", value: 95, highlight: true },
    ],
    activity: [
      { type: "graded", title: "Submission graded", timestamp: "Oct 24, 2023 • 08:30 AM" },
      { type: "session", title: "Session attended", timestamp: "Oct 23, 2023 • 11:00 AM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 21, 2023 • 05:20 PM" },
    ],
  },
  {
    id: "ta-105",
    code: "TA-105",
    name: "Priya Anand",
    initials: "PA",
    role: "Technical Screener",
    status: "Active",
    performance: 90,
    lastActivity: "Oct 24",
    trend: "+3.3%",
    history: [
      { label: "Q1", value: 82 },
      { label: "Q2", value: 86 },
      { label: "Q3", value: 90, highlight: true },
    ],
    activity: [
      { type: "graded", title: "Submission graded", timestamp: "Oct 24, 2023 • 09:10 AM" },
      { type: "session", title: "Session attended", timestamp: "Oct 22, 2023 • 02:40 PM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 19, 2023 • 03:00 PM" },
    ],
  },
  {
    id: "ta-106",
    code: "TA-106",
    name: "Marcus Reid",
    initials: "MR",
    role: "Sourcing",
    status: "Follow-Up",
    performance: 74,
    lastActivity: "Oct 21",
    trend: "+0.8%",
    history: [
      { label: "Q1", value: 70 },
      { label: "Q2", value: 72 },
      { label: "Q3", value: 74, highlight: true },
    ],
    activity: [
      { type: "session", title: "Session attended", timestamp: "Oct 21, 2023 • 10:00 AM" },
      { type: "graded", title: "Submission graded", timestamp: "Oct 18, 2023 • 01:25 PM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 15, 2023 • 09:45 AM" },
    ],
  },
  {
    id: "ta-107",
    code: "TA-107",
    name: "Elena Sokol",
    initials: "ES",
    role: "TA Associate",
    status: "Active",
    performance: 88,
    lastActivity: "Oct 23",
    trend: "+2.7%",
    history: [
      { label: "Q1", value: 81 },
      { label: "Q2", value: 85 },
      { label: "Q3", value: 88, highlight: true },
    ],
    activity: [
      { type: "graded", title: "Submission graded", timestamp: "Oct 23, 2023 • 04:05 PM" },
      { type: "session", title: "Session attended", timestamp: "Oct 21, 2023 • 12:30 PM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 18, 2023 • 08:50 AM" },
    ],
  },
  {
    id: "ta-108",
    code: "TA-108",
    name: "Omar Haddad",
    initials: "OH",
    role: "Senior Recruiter",
    status: "On Leave",
    performance: 81,
    lastActivity: "Oct 17",
    trend: "+1.1%",
    history: [
      { label: "Q1", value: 76 },
      { label: "Q2", value: 79 },
      { label: "Q3", value: 81, highlight: true },
    ],
    activity: [
      { type: "session", title: "Session attended", timestamp: "Oct 17, 2023 • 02:15 PM" },
      { type: "graded", title: "Submission graded", timestamp: "Oct 13, 2023 • 11:40 AM" },
      { type: "email", title: "Follow-up email sent", timestamp: "Oct 10, 2023 • 10:30 AM" },
    ],
  },
];

export function getMember(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}

export interface DashboardActivity {
  id: string;
  icon: "check" | "alert" | "user-plus" | "trending";
  tone: "brand" | "warn" | "tint";
  title: string;
  titleTone?: "ink" | "warn";
  time: string;
  body: string;
  actions?: { label: string; variant: "primary" | "soft" }[];
  tag?: string;
}

export const dashboardActivity: DashboardActivity[] = [
  {
    id: "1",
    icon: "check",
    tone: "brand",
    title: "TA Alpha completed a session",
    time: "12m ago",
    body: "The technical screening for the Senior DevOps role is finalized with a score of 94/100.",
  },
  {
    id: "2",
    icon: "alert",
    tone: "warn",
    title: "TA Beta needs review",
    titleTone: "warn",
    time: "1h ago",
    body: "Interview feedback from the Product Manager panel is pending approval to proceed to offer stage.",
    actions: [
      { label: "Review Now", variant: "primary" },
      { label: "Dismiss", variant: "soft" },
    ],
  },
  {
    id: "3",
    icon: "user-plus",
    tone: "tint",
    title: "New Candidate Submission",
    time: "3h ago",
    body: "A new high-match profile for 'Lead Front-end Developer' was uploaded via TA Gamma.",
    tag: "High Match",
  },
  {
    id: "4",
    icon: "trending",
    tone: "tint",
    title: "Score Update",
    time: "5h ago",
    body: "Performance metrics for TA Delta were updated following the weekly calibration meeting.",
  },
];
