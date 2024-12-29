import Link from 'next/link';

export default function BioBuilder() {
  return (
    <div className="min-h-screen bg-[#e6f7ff] text-[#003d66]">
      <header className="bg-[#007acc] text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">BioBuilder</h1>
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="bg-[#005999] px-4 py-2 rounded-full hover:bg-[#004d80] transition"
          >
            Dashboard
          </Link>
        </div>
      </header>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-[#005280] mb-6">
          Gamified Anatomy Learning
        </h2>
        <p className="text-lg text-[#004060] mb-8">
          Explore the wonders of human anatomy through interactive and gamified experiences.
          Learn, play, and test your knowledge with exciting simulations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Interactive Organ Simulation */}
          <div className="bg-[#d4efff] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img
              src="/images/organ-simulation.png"
              alt="Interactive Organ Simulation"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#005280] mb-4">
              Interactive Organ Simulation
            </h3>
            <p className="text-lg text-[#003d66] mb-6">
              Discover how organs function in the human body with interactive 3D simulations.
            </p>
            <div className="w-full h-2 bg-[#b3e6ff] mb-4">
              <div className="h-2 bg-[#007acc]" style={{ width: '80%' }}></div>
            </div>
            <Link
              href="/dashboard/biobuilder/organ-simulation"
              className="bg-[#005999] text-white py-2 px-4 rounded-full hover:bg-[#004d80] transition"
            >
              Explore Organs
            </Link>
          </div>

          {/* Muscle Builder */}
          <div className="bg-[#d4efff] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img
              src="/images/muscle-builder.png"
              alt="Muscle Builder"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#005280] mb-4">
              Muscle Builder
            </h3>
            <p className="text-lg text-[#003d66] mb-6">
              Learn about the muscle groups and how they work together to perform movements.
            </p>
            <div className="w-full h-2 bg-[#b3e6ff] mb-4">
              <div className="h-2 bg-[#007acc]" style={{ width: '75%' }}></div>
            </div>
            <Link
              href="/dashboard/biobuilder/muscle-builder"
              className="bg-[#005999] text-white py-2 px-4 rounded-full hover:bg-[#004d80] transition"
            >
              Build Muscles
            </Link>
          </div>

          {/* DNA Puzzle */}
          <div className="bg-[#d4efff] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img
              src="/images/dna-puzzle.png"
              alt="DNA Puzzle"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#005280] mb-4">DNA Puzzle</h3>
            <p className="text-lg text-[#003d66] mb-6">
              Piece together the building blocks of life with this fun and educational DNA puzzle.
            </p>
            <div className="w-full h-2 bg-[#b3e6ff] mb-4">
              <div className="h-2 bg-[#007acc]" style={{ width: '90%' }}></div>
            </div>
            <Link
              href="/dashboard/biobuilder/dna-puzzle"
              className="bg-[#005999] text-white py-2 px-4 rounded-full hover:bg-[#004d80] transition"
            >
              Solve Puzzle
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#d4efff] py-10 px-6 mt-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#005280] mb-6">Achievements & Progress</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium">Anatomy Learning Progress</h3>
          <div className="w-full h-2 bg-[#b3e6ff] mb-4">
            <div className="h-2 bg-[#007acc]" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div>
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
