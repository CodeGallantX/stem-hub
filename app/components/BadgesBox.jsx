const BadgesBox = ({ badges }) => {
    return (
        <div className="w-full max-w-2xl mx-auto py-6 px-0 md:p-6">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-b-gray-600 pb-2">Badges</h2>
            {badges.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="relative group flex items-center justify-center bg-gray-700 rounded-lg p-4 shadow"
                        >
                            {badge.icon && (
                                <img
                                    src={badge.icon}
                                    alt={badge.name}
                                    className="w-16 h-16"
                                />
                            )}

                            <div className="absolute bottom-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-lg shadow-lg p-3 w-48 text-center">
                                <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                                <p>{badge.description}</p>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-gray-800 rotate-45"></div>
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
