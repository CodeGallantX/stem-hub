"use client";
import { useState } from "react";
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FaPlay, FaLock } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import adventureScenes from "../../../data/mathquest/scenes.json";
import MountainScene from "../../components/MountainScene"; // Import MountainScene component

export default function MathQuest() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentScene, setCurrentScene] = useState(null);
  const [completedScenes, setCompletedScenes] = useState(0);
  const [sceneLevels, setSceneLevels] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCompleteScene = () => {
    setCompletedScenes((prev) => Math.min(prev + 1, adventureScenes.length));
    setCurrentScene(null);
  };

  const startScene = (index) => {
    if (index <= completedScenes) {
      setCurrentScene(adventureScenes[index]);
      // Fetch scene levels
      const sceneData = require("../../../data/mathquest/levels.json");
      const selectedScene = sceneData.find(scene => scene.scene === adventureScenes[index].name);
      setSceneLevels(selectedScene.questions);
    }
  };

  const renderSceneButton = (index) => {
    if (index === completedScenes) {
      return (
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold"
          onClick={() => startScene(index)}
        >
          Start
        </button>
      );
    } else if (index < completedScenes) {
      return (
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold"
          onClick={() => startScene(index)}
        >
          <FaArrowRotateLeft className="inline-block text-bold -translate-y-0.5 mr-1" />
          Replay
        </button>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient text-white">
      <header className="z-20 fixed w-full flex justify-between items-center bg-gray-900 px-8 lg:px-14 py-4 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-yellow-400">MathQuest</h1>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#adventure-map" className="hover:text-yellow-400 transition">
            Adventure Map
          </Link>
          <Link href="#leaderboard" className="hover:text-yellow-400 transition">
            Leaderboard
          </Link>
        </nav>
        <div className="lg:hidden flex items-center space-x-6">
          <button onClick={toggleSidebar} className="text-3xl text-yellow-400">
            <HiMenuAlt4 />
          </button>
        </div>
      </header>

      {currentScene ? (
        <MountainScene levels={sceneLevels} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-4xl font-bold mb-4">Select a Scene</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {adventureScenes.map((scene, index) => (
              <div key={scene.name} className="relative">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{scene.name}</h3>
                  <p className="text-sm">{scene.description}</p>
                </div>
                {renderSceneButton(index)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import Link from 'next/link';
// import { HiMenuAlt4 } from 'react-icons/hi';
// import { IoMdClose } from 'react-icons/io';
// import { FaPlay, FaLock } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import adventureScenes from "../../../data/mathquest/scenes.json";

// export default function MathQuest() {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [currentScene, setCurrentScene] = useState(null);
//   const [completedScenes, setCompletedScenes] = useState(0);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleCompleteScene = () => {
//     setCompletedScenes((prev) => Math.min(prev + 1, adventureScenes.length));
//     setCurrentScene(null);
//   };

//   const startScene = (index) => {
//     if (index <= completedScenes) {
//       setCurrentScene(adventureScenes[index]);
//     }
//   };

//   const renderSceneButton = (index) => {
//     if (index === completedScenes) {
//       return (
//         <button
//           className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold"
//           onClick={() => startScene(index)}
//         >
//           Start
//         </button>
//       );
//     } else if (index < completedScenes) {
//       return (
//         <button
//           className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold"
//           onClick={() => startScene(index)}
//         >
//           <FaArrowRotateLeft className="inline-block text-bold -translate-y-0.5 mr-1" />
//           Replay
//         </button>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient text-white">
//       <header className="z-20 fixed w-full flex justify-between items-center bg-gray-900 px-8 lg:px-14 py-4 shadow-lg">
//         <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-yellow-400">MathQuest</h1>
//         <nav className="hidden lg:flex items-center space-x-6">
//           <Link href="#adventure-map" className="hover:text-yellow-400 transition">
//             Adventure Map
//           </Link>
//           <Link href="#leaderboard" className="hover:text-yellow-400 transition">
//             Leaderboard
//           </Link>
//           <Link href="#profile" className="hover:text-yellow-400 transition">
//             Profile
//           </Link>
//           <Link
//             href="/dashboard"
//             className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
//           >
//             <MdDashboard /> <span>Dashboard</span>
//           </Link>
//         </nav>
//         <button onClick={toggleSidebar} className="lg:hidden text-3xl text-white">
//           <HiMenuAlt4 />
//         </button>
//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
//             onClick={toggleSidebar}
//           ></div>
//         )}

//         <div
//           className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-50 text-white flex flex-col items-center justify-center transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
//             } transition-transform duration-300 ease-in-out`}
//         >
//           <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
//             <IoMdClose />
//           </button>
//           <nav className="flex flex-col items-center space-y-8 text-lg">
//             <Link href="#adventure-map" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
//               Adventure Map
//             </Link>
//             <Link href="#leaderboard" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
//               Leaderboard
//             </Link>
//             <Link href="#profile" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
//               Profile
//             </Link>
//             <Link
//               href="/dashboard"
//               onClick={toggleSidebar}
//               className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
//             >
//               <MdDashboard /> <span>Dashboard</span>
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {!currentScene ? (
//         <>
//           <section className="relative text-center py-40 px-6">
//             <div className="absolute inset-0 bg-[url('/images/adventure-bg.jpg')] bg-cover bg-center opacity-20"></div>
//             <div className="relative z-10">
//               <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-400 mb-4">
//                 Embark on a Math Adventure!
//               </h2>
//               <p className="text-lg text-gray-300 mb-8">
//                 Solve puzzles, defeat bosses, and explore the magical world of MathQuest.
//               </p>
//               <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold transition">
//                 <FaPlay className="inline-block mr-2 " />
//                 Start Quest
//               </button>
//             </div>
//           </section>

//           <section
//             id="adventure-map"
//             className="py-16 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-800 to-black"
//           >
//             <h3 className="text-3xl font-bold text-yellow-400 mb-8">Adventure Map</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {adventureScenes.map((scene, index) => (
//                 <div
//                   key={index}
//                   className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 ${index <= completedScenes ? "scale-100" : "scale-95 opacity-50"
//                     }`}
//                 >
//                   <img
//                     src={scene.img}
//                     alt={scene.name}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div
//                     className={`absolute inset-0 flex items-center justify-center ${index > completedScenes ? "bg-black bg-opacity-60" : "bg-black bg-opacity-40"
//                       }`}
//                   >
//                     <h4 className="text-xl font-bold text-yellow-400 p-2 bg-gray-900 rounded-md">{scene.name}</h4>
//                     {index > completedScenes && (
//                       <FaLock className="text-yellow-400 text-[4rem] absolute" />
//                     )}
//                   </div>
//                   {renderSceneButton(index)}
//                 </div>
//               ))}
//             </div>
//           </section>
//         </>
//       ) : (
//         <section className="py-24 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-800 to-black">
//           <h3 className="text-3xl font-bold text-yellow-400 mb-8">{currentScene.name}</h3>
//           <p className="text-gray-300 mb-6">{currentScene.description}</p>
//           <img src={currentScene.img} alt={currentScene.name} className="w-full max-w-md mx-auto rounded-lg mb-6" />
//           <button
//             onClick={handleCompleteScene}
//             className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold transition"
//           >
//             Complete Scene
//           </button>
//         </section>
//       )}

//       <footer className="bg-gray-900 py-6 text-center text-gray-500">
//         <p className="text-sm">© 2024 MathQuest | A gamified way to master mathematics.</p>
//       </footer>
//     </div>
//   );
// }




// // "use client";
// // import { useState } from "react";
// // import Link from 'next/link';
// // import { HiMenuAlt4 } from 'react-icons/hi';
// // import { IoMdClose } from 'react-icons/io';
// // import { FaPlay, FaLock } from "react-icons/fa";
// // import { MdDashboard } from "react-icons/md";
// // import adventureScenes from "../../../data/mathquest/scenes.json";

// // export default function MathQuest() {

// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [currentScene, setCurrentScene] = useState(null);
// //   const [completedScenes, setCompletedScenes] = useState(0);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const handleCompleteScene = () => {
// //     setCompletedScenes((prev) => Math.min(prev + 1, adventureScenes.length));
// //     setCurrentScene(null);
// //   };

// //   const startScene = (index) => {
// //     if (index <= completedScenes) {
// //       setCurrentScene(adventureScenes[index]);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient text-white">
// //       <header className="z-20 fixed w-full flex justify-between items-center bg-gray-900 px-8 lg:px-14 py-4 shadow-lg">
// //         <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-yellow-400">MathQuest</h1>
// //         <nav className="hidden lg:flex items-center space-x-6">
// //           <Link href="#adventure-map" className="hover:text-yellow-400 transition">
// //             Adventure Map
// //           </Link>
// //           <Link href="#leaderboard" className="hover:text-yellow-400 transition">
// //             Leaderboard
// //           </Link>
// //           <Link href="#profile" className="hover:text-yellow-400 transition">
// //             Profile
// //           </Link>
// //           <Link
// //             href="/dashboard"
// //             className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
// //           >
// //             <MdDashboard /> <span>Dashboard</span>
// //           </Link>
// //         </nav>
// //         <button onClick={toggleSidebar} className="lg:hidden text-3xl text-white">
// //           <HiMenuAlt4 />
// //         </button>
// //         {isSidebarOpen && (
// //           <div
// //             className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
// //             onClick={toggleSidebar}
// //           ></div>
// //         )}

// //         <div
// //           className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-50 text-white flex flex-col items-center justify-center transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
// //             } transition-transform duration-300 ease-in-out`}
// //         >
// //           <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
// //             <IoMdClose />
// //           </button>
// //           <nav className="flex flex-col items-center space-y-8 text-lg">
// //             <Link href="#adventure-map" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
// //               Adventure Map
// //             </Link>
// //             <Link href="#leaderboard" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
// //               Leaderboard
// //             </Link>
// //             <Link href="#profile" onClick={toggleSidebar} className="hover:text-yellow-400 transition">
// //               Profile
// //             </Link>
// //             <Link
// //               href="/dashboard"
// //               onClick={toggleSidebar}
// //               className="bg-yellow-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-yellow-500 transition"
// //             >
// //               <MdDashboard /> <span>Dashboard</span>
// //             </Link>
// //           </nav>
// //         </div>
// //       </header>

// //       {!currentScene ? (
// //         <>
// //           <section className="relative text-center py-40 px-6">
// //             <div className="absolute inset-0 bg-[url('/images/adventure-bg.jpg')] bg-cover bg-center opacity-20"></div>
// //             <div className="relative z-10">
// //               <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-400 mb-4">
// //                 Embark on a Math Adventure!
// //               </h2>
// //               <p className="text-lg text-gray-300 mb-8">
// //                 Solve puzzles, defeat bosses, and explore the magical world of MathQuest.
// //               </p>
// //               <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold transition">
// //                 <FaPlay className="inline-block mr-2 " />
// //                 Start Quest
// //               </button>
// //             </div>
// //           </section>

// //           <section
// //             id="adventure-map"
// //             className="py-16 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-800 to-black"
// //           >
// //             <h3 className="text-3xl font-bold text-yellow-400 mb-8">Adventure Map</h3>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //               {adventureScenes.map((scene, index) => (
// //                 <div
// //                   key={index}
// //                   className={`relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 ${index <= completedScenes ? "scale-100" : "scale-95 opacity-50"
// //                     }`}
// //                 >
// //                   <img
// //                     src={scene.img}
// //                     alt={scene.name}
// //                     className="w-full h-56 object-cover"
// //                   />
// //                   <div
// //                     className={`absolute inset-0 flex items-center justify-center ${index > completedScenes ? "bg-black bg-opacity-60" : "bg-black bg-opacity-40"
// //                       }`}
// //                   >
// //                     <h4 className="text-xl font-bold text-yellow-400 p-2 bg-gray-900 rounded-md">{scene.name}</h4>
// //                     {index > completedScenes && (
// //                       <FaLock className="text-yellow-400 text-[4rem] absolute" />
// //                     )}
// //                   </div>
// //                   <button
// //                     className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold ${index === completedScenes ? "block" : "hidden"
// //                       }`}
// //                     onClick={() => startScene(index)}
// //                   >
// //                     Start
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>
// //         </>
// //       ) : (
// //         <section className="py-16 px-6 text-center bg-gradient-to-t from-gray-900 via-gray-800 to-black">
// //           <h3 className="text-3xl font-bold text-yellow-400 mb-8">{currentScene.name}</h3>
// //           <p className="text-gray-300 mb-6">{currentScene.description}</p>
// //           <img src={currentScene.img} alt={currentScene.name} className="w-full max-w-md mx-auto rounded-lg mb-6" />
// //           <button
// //             onClick={handleCompleteScene}
// //             className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-bold transition"
// //           >
// //             Complete Scene
// //           </button>
// //         </section>
// //       )}

// //       <footer className="bg-gray-900 py-6 text-center text-gray-500">
// //         <p className="text-sm">© 2024 MathQuest | A gamified way to master mathematics.</p>
// //       </footer>
// //     </div>
// //   );
// // }
