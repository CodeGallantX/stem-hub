import board from '../../data/leaderboard.json';

export default function Leaderboard() {
  const sortedBoard = [...board].sort((a, b) => b.points - a.points);

  const sectionColors = ['bg-yellow-300', 'bg-gray-300', 'bg-orange-300'];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-[#e0e0e0] w-full  mx-auto">
      <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Leaderboard</h3>
      <ul className="space-y-4">
        {sortedBoard.map((contestant, index) => (
          <li
            key={index}
            className={`cursor-pointer flex items-center justify-between py-2 px-4 rounded-lg border-b border-b-gray-100 ${
              index < 3 ? sectionColors[index] : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              <img
                src={contestant.profileImage}
                alt={`${contestant.name} profile`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="font-medium text-lg">{contestant.name}</span>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{contestant.level}</span>
                  <span>|</span>
                  <span>{contestant.lastActive}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-gray-700 block">{contestant.points}</span>
              <div className="text-sm text-gray-500 flex space-x-1">
                {contestant.badges.map((badge, badgeIndex) => (
                  <span key={badgeIndex}>{badge}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
