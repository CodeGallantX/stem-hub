import { FaChalkboardTeacher, FaUsers, FaGamepad } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features" className="py-40 bg-yellow-50 text-black min-h-screen">
      <div className="text-center px-14 md:px-24 lg:px-40">
        <h2 className="text-3xl font-semibold mb-12 text-[#8d4e2d]">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="cursor-pointer  bg-[#f4e1d2] p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center mb-4">
              <FaChalkboardTeacher className="text-[#9c5d3f] text-5xl mr-3" />
              <h3 className="text-2xl font-semibold text-[#9c5d3f]">Interactive Learning</h3>
            </div>
            <p>
              Dive into interactive STEM activities that make learning fun and hands-on.
            </p>
          </div>

          <div className="cursor-pointer bg-[#f4e1d2] p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center mb-4">
              <FaUsers className="text-[#9c5d3f] text-5xl mr-3" />
              <h3 className="text-2xl font-semibold text-[#9c5d3f]">Community Engagement</h3>
            </div>
            <p>
              Join a community of like-minded learners and contribute to open-source STEM projects.
            </p>
          </div>

          <div className="cursor-pointer bg-[#f4e1d2] p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center mb-4">
              <FaGamepad className="text-[#9c5d3f] text-5xl mr-3 p-1" />
              <h3 className="text-2xl font-semibold text-[#9c5d3f]">Gamified Learning</h3>
            </div>
            <p>
              Learn through games that challenge your critical thinking and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
