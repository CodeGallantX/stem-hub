import Link from "next/link";
import apps from "../../data/apps.json";
import { FaArrowRight } from "react-icons/fa";

export default function AppCard() {
  return (
    <div className="lg:col-span-2 space-y-8">
      {apps.map((app, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden"
        >
          {/* Transparent Background Image/Icon */}
          <div className="absolute bottom-4 right-4 opacity-20">
            <img
              src={app.image} // Ensure `image` is included in your JSON data for each app
              alt={`${app.title} icon`}
              className="w-20 h-20"
            />
          </div>

          {/* Card Content */}
          <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">{app.title}</h3>
          <p className="text-lg text-[#6a3d29] mb-6">{app.tagline}</p>

          {/* Button */}
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