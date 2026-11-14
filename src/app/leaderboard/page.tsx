import { leaderboard } from "@/lib/content";

export default function Leaderboard() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <p className="mt-2 text-sm">Sample standings for layout preview. Official scores will be published during the event.</p>
      <table className="mt-8 w-full text-left text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-3">Rank</th>
            <th>Team</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry) => (
            <tr key={entry.team} className="border-b">
              <td className="py-3">{entry.rank}</td>
              <td>{entry.team}</td>
              <td className="text-right">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
