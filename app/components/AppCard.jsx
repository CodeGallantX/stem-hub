import Link from "next/link";
import apps from "/data/apps.json";
import { FaArrowRight } from "react-icons/fa";

export default function AppCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {apps.map((app, index) => (
        <div
          key={index}
          className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
        >
          <div className="absolute bottom-2 right-2 opacity-20 -z-10">
            <img
              src={app.image}
              alt={`${app.title} icon`}
              className="w-32 h-32"
            />
          </div>

          <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">
            {app.title}
          </h3>
          <p className="text-lg text-[#6a3d29] mb-6">{app.tagline}</p>

          <Link
            href={app.url}
            className="inline-flex items-center bg-[#b87f42] text-white py-2 px-4 rounded-lg hover:bg-[#9a6c3d] transition"
          >
            Explore <FaArrowRight className="ml-2" />
          </Link>
        </div>
      ))}
    </div>
  );
}