export const sponsors = [
  { name: "Sponsor One", tier: "Gold" },
  { name: "Sponsor Two", tier: "Silver" },
  { name: "Sponsor Three", tier: "Silver" },
  { name: "Sponsor Four", tier: "Bronze" },
];

export const projects = [
  { title: "Project Title", team: "Team Name", description: "One or two sentences about what it does.", tags: ["ML", "Python"] },
  { title: "Another Project", team: "Team Name", description: "One or two sentences about what it does.", tags: ["NLP"] },
  { title: "Third Project", team: "Team Name", description: "One or two sentences about what it does.", tags: ["Viz"] },
];

// Put real photos in public/images/ and list them here, e.g. "/images/day1.jpg"
export const gallery: string[] = [];

export const contactMethods = [
  { label: "Email", value: "Organizer email to be announced" },
  { label: "Community", value: "Community link to be announced" },
];

export type LeaderboardEntry = {
  rank: number;
  team: string;
  score: number;
};

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, team: "Team Alpha", score: 0 },
  { rank: 2, team: "Team Beta", score: 0 },
  { rank: 3, team: "Team Gamma", score: 0 },
];

export type ScheduleItem = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
};

export const schedule: ScheduleItem[] = [
  {
    title: "Check-in (sample)",
    date: "Event date",
    startTime: "08:30",
    endTime: "09:30",
    location: "Main venue",
  },
  {
    title: "Opening ceremony (sample)",
    date: "Event date",
    startTime: "09:30",
    endTime: "10:00",
    location: "Main hall",
  },
];