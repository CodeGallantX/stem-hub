import Link from 'next/link';

export default function STEMExplorer() {
  return (
    <div className="min-h-screen bg-[#fef2d8] text-[#4f3c1d]">
      <header className="bg-[#f28d1c] text-white p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">STEM Explorer</h1>
        <div className="flex items-center space-x-4">
          <Link href="/" className="bg-[#b87f42] px-4 py-2 rounded-full hover:bg-[#9a6c3d] transition">
              Dashboard
          </Link>
        </div>
      </header>

      <section className="py-10 px-6">
        <h2 className="text-3xl font-semibold text-[#7f4b23] mb-6">Explore Interactive Simulations</h2>
        <p className="text-lg text-[#6a3d29] mb-8">
          Dive into a variety of STEM simulations to explore core concepts in physics, chemistry, and mathematics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-[#fdf1e1] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Newton's Laws Simulation</h3>
            <p className="text-lg text-[#6a3d29] mb-6">
              Understand the laws of motion by experimenting with various objects and forces.
            </p>
            <div className="w-full h-2 bg-[#ebdbb2] mb-4">
              <div className="h-2 bg-[#f28d1c]" style={{ width: '75%' }}></div>
            </div>
            <Link href="/newtons-laws" className="bg-[#b87f42] text-white py-2 px-4 rounded-full hover:bg-[#9a6c3d] transition">
                Start Simulation
            </Link>
          </div>

          <div className="bg-[#fdf1e1] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Periodic Table Exploration</h3>
            <p className="text-lg text-[#6a3d29] mb-6">
              Explore the periodic table with interactive elements and learn about each element's properties.
            </p>
            <div className="w-full h-2 bg-[#ebdbb2] mb-4">
              <div className="h-2 bg-[#f28d1c]" style={{ width: '65%' }}></div>
            </div>
            <Link href="/periodic-table" className="bg-[#b87f42] text-white py-2 px-4 rounded-full hover:bg-[#9a6c3d] transition">
                Explore Table
            </Link>
          </div>

          <div className="bg-[#fdf1e1] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">Geometry Visualizer</h3>
            <p className="text-lg text-[#6a3d29] mb-6">
              Visualize geometric shapes and understand the core principles of geometry.
            </p>
            <div className="w-full h-2 bg-[#ebdbb2] mb-4">
              <div className="h-2 bg-[#f28d1c]" style={{ width: '80%' }}></div>
            </div>
            <Link href="/geometry-visualizer" className="bg-[#b87f42] text-white py-2 px-4 rounded-full hover:bg-[#9a6c3d] transition">
                Start Visualization
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-[#fdf1e1] py-10 px-6 mt-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#7f4b23] mb-6">Progress & Achievements</h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium">Simulation Progress</h3>
          <div className="w-full h-2 bg-[#ebdbb2] mb-4">
            <div className="h-2 bg-[#f28d1c]" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium">Badges Earned</h3>
          <div className="flex justify-between mb-4">
            <div className="w-1/3 bg-[#f28d1c] h-2 rounded"></div>
            <div className="w-1/3 bg-[#d4af37] h-2 rounded"></div>
            <div className="w-1/3 bg-[#8e9a3f] h-2 rounded"></div>
          </div>
        </div>
      </section>

      <footer className="bg-[#7f4b23] text-white py-6 text-center">
        <p>&copy; 2024 STEMHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
