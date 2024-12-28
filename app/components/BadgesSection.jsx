import BadgesBox from "./BadgesBox";
import badges from '../../data/badges.json'

const BadgesSection = () => {
    return (
        <div className="bg-gray-900 rounded-lg flex flex-col items-center justify-start py-6 px-4 md:px-6 lg:px-10 max-w-full mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-6">Achievements</h2>
            <BadgesBox badges={badges} />
        </div>
    );
};

export default BadgesSection;