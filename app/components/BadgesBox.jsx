const BadgesBox = ({ badges }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-b-[#e76f51] pb-1">Badges</h2>
            {badges.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="relative group flex items-center justify-center bg-[#D28C69FF] rounded-lg p-2 shadow-lg transition-transform transform hover:scale-105"
                        >
                            {badge.icon && (
                                <img
                                    src={badge.icon}
                                    alt={badge.name}
                                    className="w-16 h-16 object-contain"
                                />
                            )}

                            <div className="z-10 absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#7f4b23] text-white text-xs rounded-lg shadow-lg p-3 w-48 text-center z-10">
                                <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                                <p className="text-xs">{badge.description}</p>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-[#7f4b23] rotate-45"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-sm">No badges earned yet.</p>
            )}
        </div>
    );
};

export default BadgesBox;