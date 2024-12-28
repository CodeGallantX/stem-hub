export default function ProfileSection() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full space-y-4">
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/profile-pic.jpg" // Add dynamic profile picture here
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">John Samuel</h2>
            <p className="text-sm text-gray-500">Web Developer | STEM Enthusiast</p>
            <div className="flex space-x-4 mt-2 text-sm text-gray-600">
              <span>Rank: Pro</span>
              <span>Level: 5</span>
              <span>Points: 120</span>
            </div>
          </div>
        </div>
  
        {/* Profile Description */}
        <div>
          <p className="text-gray-700 mt-4">
            Passionate web developer with a strong focus on frontend technologies and a keen interest in building scalable web applications. Always eager to learn and improve.
          </p>
        </div>
      </div>
    );
  }
  