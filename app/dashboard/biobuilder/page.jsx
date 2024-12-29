import Link from 'next/link';
import { FaDna, FaHeartbeat, FaPuzzlePiece } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

export default function BioBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7ff] to-white text-[#003d66]">
      {/* Header */}
      <header className="bg-[#007acc] text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold flex items-center space-x-2">
          <FaDna /> <span>BioBuilder</span>
        </h1>
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="bg-[#005999] px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-[#004d80] transition"
          >
            <MdDashboard /> <span>Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-[#005280] mb-6">
          Gamified Anatomy Learning
        </h2>
        <p className="text-lg text-[#004060] mb-8">
          Explore the wonders of human anatomy through interactive and gamified experiences.
          Learn, play, and test your knowledge with exciting simulations.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Interactive Organ Simulation */}
          <FeatureCard
            title="Interactive Organ Simulation"
            description="Discover how organs function in the human body with interactive 3D simulations."
            imgSrc="/images/organ-simulation.png"
            progress={80}
            link="/dashboard/biobuilder/organ-simulation"
            buttonText="Explore Organs"
            icon={<FaHeartbeat className="text-4xl text-[#007acc]" />}
          />

          {/* Muscle Builder */}
          <FeatureCard
            title="Muscle Builder"
            description="Learn about the muscle groups and how they work together to perform movements."
            imgSrc="/images/muscle-builder.png"
            progress={75}
            link="/dashboard/biobuilder/muscle-builder"
            buttonText="Build Muscles"
            icon={<FaHeartbeat className="text-4xl text-[#007acc]" />}
          />

          {/* DNA Puzzle */}
          <FeatureCard
            title="DNA Puzzle"
            description="Piece together the building blocks of life with this fun and educational DNA puzzle."
            imgSrc="/images/dna-puzzle.png"
            progress={90}
            link="/dashboard/biobuilder/dna-puzzle"
            buttonText="Solve Puzzle"
            icon={<FaPuzzlePiece className="text-4xl text-[#007acc]" />}
          />
        </div>
      </section>

      {/* Achievements & Progress */}
      <section className="bg-[#d4efff] py-10 px-6 mt-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#005280] mb-6 flex items-center space-x-2">
          <FaDna /> <span>Achievements & Progress</span>
        </h2>
        <ProgressCard title="Anatomy Learning Progress" progress={70} />

        <div className="mt-6">
          <h3 className="text-xl font-medium">Challenges Completed</h3>
          <ul className="list-disc pl-6 text-lg text-[#003d66]">
            <li>Completed Organ Simulation</li>
            <li>Mastered Muscle Groups</li>
            <li>Solved DNA Puzzle</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, imgSrc, progress, link, buttonText, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <img
          src={imgSrc}
          alt={title}
          className="w-20 h-20 object-cover rounded-lg border border-[#b3e6ff]"
        />
      </div>
      <h3 className="text-2xl font-semibold text-[#005280] mb-4">{title}</h3>
      <p className="text-lg text-[#003d66] mb-6">{description}</p>
      <div className="w-full h-2 bg-[#b3e6ff] mb-4">
        <div className="h-2 bg-[#007acc]" style={{ width: `${progress}%` }}></div>
      </div>
      <Link
        href={link}
        className="bg-[#005999] text-white py-2 px-4 rounded-full hover:bg-[#004d80] transition"
      >
        {buttonText}
      </Link>
    </div>
  );
}

function ProgressCard({ title, progress }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="w-full h-2 bg-[#b3e6ff] mb-2">
        <div className="h-2 bg-[#007acc]" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-[#004060]">{progress}% completed</p>
    </div>
  );
}
