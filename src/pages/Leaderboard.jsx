import { Link } from "react-router-dom";

const leaderboard = [
  { rank: 1, name: "Ayesha", wpm: 98, accuracy: 99 },
  { rank: 2, name: "Rohan", wpm: 92, accuracy: 97 },
  { rank: 3, name: "Mehreen", wpm: 89, accuracy: 96 },
  { rank: 4, name: "Ali", wpm: 84, accuracy: 95 },
];

function Leaderboard() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-600">Ranking</p>
            <h1 className="text-4xl font-semibold">Leaderboard</h1>
          </div>

          <Link
            to="/"
            className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/5"
          >
            Back home
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="grid grid-cols-[80px_1fr_100px_100px] border-b border-white/10 bg-white/[0.02] px-5 py-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
            <span>Rank</span>
            <span>Player</span>
            <span>WPM</span>
            <span>Accuracy</span>
          </div>

          {leaderboard.map((player) => (
            <div
              key={player.rank}
              className="grid grid-cols-[80px_1fr_100px_100px] items-center border-b border-white/10 px-5 py-4 last:border-b-0"
            >
              <span className="font-semibold text-zinc-300">#{player.rank}</span>
              <span>{player.name}</span>
              <span>{player.wpm}</span>
              <span>{player.accuracy}%</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Leaderboard;
