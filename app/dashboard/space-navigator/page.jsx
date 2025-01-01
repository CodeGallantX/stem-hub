import Link from 'next/link';
import { FaRocket, FaMapMarkerAlt, FaSatellite, FaStar } from 'react-icons/fa';

export default function SpaceNavigator() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0033] via-[#1a004d] to-[#330066] text-white flex flex-col items-center">
      <header className="z-20 fixed w-full flex justify-between items-center bg-gray-900 px-8 lg:px-14 py-4 shadow-lg">
        <Link href="/dashboard/space-navigator" className="text-2xl md:text-3xl font-extrabold tracking-wider text-yellow-400">Space Navigator</Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#adventure-map" className="hover:text-yellow-400 transition">
            Adventure Map
          </Link>
          <Link href="#leaderboard" className="hover:text-yellow-400 transition">
            Leaderboard
          </Link>
          <Link href="#profile" className="hover:text-yellow-400 transition">
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="bg-[#5200a3] hover:bg-[#6b00cc] px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 transition"
          >
            <MdDashboard /> <span>Dashboard</span>
          </Link>
        </nav>
        <button onClick={toggleSidebar} className="lg:hidden text-3xl text-white">
          <HiMenuAlt4 />
        </button>
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
            onClick={toggleSidebar}
          ></div>
        )}

        <div
          className={`lg:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50 text-white flex flex-col items-center justify-center transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
            <IoMdClose />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <Link href="#adventure-map" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
              Adventure Map
            </Link>
            <Link href="#leaderboard" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
              Leaderboard
            </Link>
            <Link href="#profile" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
              Profile
            </Link>
            <Link
              href="/dashboard"
              onClick={toggleSidebar}
              className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
            >
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </nav>
        </div>
      </header>

      <section className="text-center mt-10">
        <h2 className="text-3xl font-semibold mb-4">
          Discover the Universe Like Never Before
        </h2>
        <p className="text-lg text-[#c2b7ff] max-w-3xl mx-auto mb-8">
          Explore planets, track satellites, and learn about constellations in an interactive, immersive way. Your journey through the cosmos starts here.
        </p>
        <Link
          href="#features"
          className="bg-[#6a00cc] hover:bg-[#8e00ff] px-6 py-3 rounded-full text-xl font-semibold transition transform hover:scale-105 shadow-lg"
        >
          Get Started
        </Link>
      </section>

      <section id="features" className="py-16 px-6 w-full max-w-6xl">
        <h3 className="text-3xl font-bold mb-10 text-center">Explore Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#24005a] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition group">
            <div className="flex items-center justify-center mb-4 text-[#9c00ff] group-hover:text-[#cc33ff] text-5xl">
              <FaRocket />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Planet Explorer</h4>
            <p className="text-[#c2b7ff] mb-4">
              Zoom through planets in our solar system, learn their histories, and experience them in 3D.
            </p>
            <Link
              href="/space/planets"
              className="inline-block bg-[#5200a3] text-white py-2 px-4 rounded-full hover:bg-[#6b00cc] transition"
            >
              Explore Planets
            </Link>
          </div>

          <div className="bg-[#24005a] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition group">
            <div className="flex items-center justify-center mb-4 text-[#ff8c00] group-hover:text-[#ffaa33] text-5xl">
              <FaMapMarkerAlt />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Satellite Tracker</h4>
            <p className="text-[#c2b7ff] mb-4">
              View live positions of satellites orbiting Earth and track their movements in real-time.
            </p>
            <Link
              href="/space/satellites"
              className="inline-block bg-[#5200a3] text-white py-2 px-4 rounded-full hover:bg-[#6b00cc] transition"
            >
              Track Satellites
            </Link>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-[#24005a] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition group">
            <div className="flex items-center justify-center mb-4 text-[#00ccff] group-hover:text-[#33ddff] text-5xl">
              <FaSatellite />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Star Finder</h4>
            <p className="text-[#c2b7ff] mb-4">
              Identify constellations and stars in your area with detailed visualizations and data.
            </p>
            <Link
              href="/space/stars"
              className="inline-block bg-[#5200a3] text-white py-2 px-4 rounded-full hover:bg-[#6b00cc] transition"
            >
              Find Stars
            </Link>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-[#24005a] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition group">
            <div className="flex items-center justify-center mb-4 text-[#ffaa33] group-hover:text-[#ffcc66] text-5xl">
              <FaStar />
            </div>
            <h4 className="text-2xl font-semibold mb-2">Cosmic Challenges</h4>
            <p className="text-[#c2b7ff] mb-4">
              Take fun quizzes and challenges to test your space knowledge and earn cosmic badges.
            </p>
            <Link
              href="/space/challenges"
              className="inline-block bg-[#5200a3] text-white py-2 px-4 rounded-full hover:bg-[#6b00cc] transition"
            >
              Start Challenges
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f005e] w-full py-6 text-center text-[#c2b7ff] text-sm">
        <p>© {new Date().getFullYear()} Space Navigator. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
