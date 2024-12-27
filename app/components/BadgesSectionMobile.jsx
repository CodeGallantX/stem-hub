import BadgesBox from "./BadgesBox";
import badges from '../../data/badges.json'


const BadgesSection = () => {
    return (
        <div className="bg-gray-800 flex items-center justify-start">
            <BadgesBox badges={badges} />
        </div>
    );
};

export default BadgesSection;