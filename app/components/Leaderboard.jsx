import board from '../../data/leaderboard.json';

export default function Leaderboard() {
  // Sort the leaderboard by points in descending order
  const sortedBoard = [...board].sort((a, b) => b.points - a.points);

  // Badge colors for the top 3
  const badgeColors = ['gold', 'silver', 'bronze'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-[#e0e0e0] max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Leaderboard</h3>
      <ul className="space-y-4">
        {sortedBoard.map((contestant, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg border-b border-b-gray-100 ${
              index < 3 ? `bg-[${badgeColors[index]}] bg-opacity-80` : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-4">
              {index < 3 && (
                <div
                  className={`w-8 h-8 flex justify-center items-center text-white font-bold text-sm rounded-full`}
                  style={{
                    backgroundColor:
                      index === 0
                        ? '#FFD700' // Gold
                        : index === 1
                        ? '#C0C0C0' // Silver
                        : '#CD7F32', // Bronze
                  }}
                >
                  {index + 1}
                </div>
              )}
              <span className="font-medium">{contestant.name}</span>
            </div>
            <span className="font-semibold text-gray-700">{contestant.points} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
