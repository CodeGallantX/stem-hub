import Link from "next/link";
import apps from '../../data/apps.json'

export default function AppCard() {

  return (
    <div className="lg:col-span-2 space-y-8">
      {/* <div className="flex min-h-screen bg-gray-100"> */}
      {apps.map((app, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#7f4b23] mb-4">{app.title}</h3>
            <p className="text-lg text-[#6a3d29] mb-6">{app.tagline}</p>
            <Link
              href={app.url}
              className="bg-[#b87f42] text-white py-2 px-4 rounded-lg hover:bg-[#9a6c3d] transition"
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}