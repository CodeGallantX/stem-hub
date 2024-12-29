import Link from "next/link";
import experiments from "../../../data/chemexp.json";

export default function ChemLab() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2c5364] via-[#203a43] to-[#0f2027] text-white">
      <header className="bg-[#1f2933] text-white p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">ChemLab</h1>
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="bg-[#4caf50] px-4 py-2 rounded-full hover:bg-[#45a249] transition text-sm"
          >
            Dashboard
          </Link>
        </div>
      </header>

      <section className="py-10 px-6">
        <h2 className="text-4xl font-semibold mb-6 text-center">
          Explore Chemistry Experiments
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          Conduct virtual experiments and learn about chemical reactions,
          properties, and more with our interactive lab.
        </p>

        {/* Experiment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((experiment) => (
            <div
              key={experiment.id}
              className="bg-[#1f2933] p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src={experiment.image}
                alt={experiment.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{experiment.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{experiment.description}</p>
              <Link
                href={experiment.link}
                className="bg-[#4caf50] text-white py-2 px-4 rounded-full hover:bg-[#45a249] transition"
              >
                Start Experiment
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2933] py-6 text-center text-gray-400">
        <p className="text-sm">
          © 2024 ChemLab | Your gateway to understanding chemistry interactively.
        </p>
      </footer>
    </div>
  );
}
