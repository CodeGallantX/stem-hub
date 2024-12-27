import board from '../../data/leaderboard.json'

export default function Leaderboard() {

    return (
        <div className="">
                <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Leaderboard</h3>
                <ul className="space-y-4">
                    {board.map((contestant, index) => (
                        <li key={index} className="flex flex-row items-center justify-between">
                            <span>{contestant.name}</span>
                            <span className="font-semibold">{contestant.points} points</span>
                        </li>
                    ))}
                </ul>
        </div>
    );
}