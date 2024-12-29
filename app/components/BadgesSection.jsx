import BadgesBox from "./BadgesBox";
import badges from '../../data/badges.json'

const BadgesSection = () => {
    return (
        <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-start p-6 max-w-full mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Achievements</h2>
            <BadgesBox badges={badges} />
        </div>
    );
};

export default BadgesSection;
