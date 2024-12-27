import BadgesBox from "./BadgesBox";
import badges from '../../data/badges.json'


const BadgesSection = () => {
    return (
        <div className="bg-gray-900 rounded-lg flex items-center justify-start">
            <BadgesBox badges={badges} />
        </div>
    );
};

export default BadgesSection;