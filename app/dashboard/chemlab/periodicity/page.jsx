"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaRedo, FaInfoCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function PeriodicityApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [elements, setElements] = useState([]);
  const [quizMode, setQuizMode] = useState(false);
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    fetch("/elements.json")
      .then((response) => response.json())
      .then((data) => setElements(data))
      .catch((error) => console.error("Error loading elements:", error));
  }, []);

  const startQuiz = () => {
    setQuizMode(true);
    setFlashcardMode(false);
    generateQuestion();
  };

  const quitQuiz = () => {
    setQuizMode(false);
    setScore(0);
    setAttempts(0);
    setCurrentQuestion(null);
  };

  const startFlashcards = () => {
    setFlashcardMode(true);
    setQuizMode(false);
    setFlashcardIndex(0);
  };

  const generateQuestion = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    setCurrentQuestion(randomElement);
    setUserAnswer("");
  };

  const submitAnswer = () => {
    if (userAnswer.trim().toLowerCase() === currentQuestion.name.toLowerCase()) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert(`Incorrect! The correct answer was ${currentQuestion.name}`);
    }
    setAttempts(attempts + 1);
    generateQuestion();
  };

  const nextFlashcard = () => {
    setFlashcardIndex((flashcardIndex + 1) % elements.length);
  };

  const previousFlashcard = () => {
    setFlashcardIndex((flashcardIndex - 1 + elements.length) % elements.length);
  };

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-green-100 via-pink-100 to-cyan-100 animate-gradient py-32">
      <header className="z-20 fixed w-full top-0 flex justify-between items-center bg-transparent backdrop-blur-md px-8 lg:px-20 py-4 border-b border-b-solid border-b-gray-500">
        <Link href="/dashboard/mathquest" className="text-2xl md:text-3xl font-bold text-pink-600">
          <span className="text-cyan-600">Periodic</span>Table
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#adventure-map" className="hover:text-pink-400 transition">
            Adventure Map
          </Link>
          <Link href="#leaderboard" className="hover:text-pink-400 transition">
            Leaderboard
          </Link>
          <Link href="#profile" className="hover:text-pink-400 transition">
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="bg-pink-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-pink-500 transition"
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
            <Link href="#adventure-map" onClick={toggleSidebar} className="hover:text-pink-400 transition">
              Adventure Map
            </Link>
            <Link href="#leaderboard" onClick={toggleSidebar} className="hover:text-pink-400 transition">
              Leaderboard
            </Link>
            <Link href="#profile" onClick={toggleSidebar} className="hover:text-pink-400 transition">
              Profile
            </Link>
            <Link
              href="/dashboard"
              onClick={toggleSidebar}
              className="bg-pink-400 px-4 py-2 rounded-full text-gray-800 flex items-center space-x-2 hover:bg-pink-500 transition"
            >
              <MdDashboard /> <span>Dashboard</span>
            </Link>
          </nav>
        </div>
      </header>

      {elements.length === 0 ? (
        <div className="text-center mt-8">Loading data...</div>
      ) : !quizMode && !flashcardMode ? (
        <section className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-center mt-8">Periodic Table</h2>
          <div className="grid grid-cols-18 gap-1 text-sm mt-6 relative">
            {Array.from({ length: 7 }, (_, rowIndex) => (
              <div key={rowIndex} className="flex justify-start">
                {Array.from({ length: 18 }, (_, colIndex) => {
                  const element = elements.find(
                    (el) => el.period === rowIndex + 1 && el.group === colIndex + 1
                  );
                  return element ? (
                    <div
                      key={element.atomicNumber}
                      onMouseEnter={() => setHoveredElement(element)}
                      onMouseLeave={() => setHoveredElement(null)}
                      className={`w-12 h-12 flex flex-col justify-center items-center border border-gray-300 rounded 
                      transition-transform hover:scale-110 ${element.block === "s"
                          ? "bg-blue-100"
                          : element.block === "p"
                            ? "bg-green-100"
                            : "bg-yellow-100"
                        }`}
                    >
                      <strong>{element.symbol}</strong>
                      <span className="text-xs">{element.atomicNumber}</span>
                    </div>
                  ) : (
                    <div key={colIndex} className="w-12 h-12"></div>
                  );
                })}
              </div>
            ))}
            {hoveredElement && (
              <div className="absolute bg-white shadow-lg p-2 text-sm rounded z-10">
                <strong>{hoveredElement.name}</strong>: {hoveredElement.info}
              </div>
            )}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={startQuiz}
              className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition"
            >
              <FaArrowRight className="inline mr-2" />
              Start Quiz
            </button>
            <button
              onClick={startFlashcards}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition ml-4"
            >
              <FaInfoCircle className="inline mr-2" />
              Flashcards
            </button>
          </div>
        </section>
      ) : quizMode ? (
        <section>
          <h2 className="text-3xl font-semibold text-center mt-8">Quiz Mode</h2>
          <div className="mt-6 text-center">
            <p className="text-lg">
              What is the name of the element with symbol <strong>{currentQuestion?.symbol}</strong>?
            </p>
            <fieldset className="flex flex-row items-center justify-center">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="block max-w-lg mx-auto mt-4 px-4 py-3 outline-none border border-gray-300 focus:border-pink-500 rounded-full bg-pink-100 text-lg"
              />
              <button
                onClick={submitAnswer}
                className="bg-blue-500 text-white mt-4 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-400 transition"
              >
                Submit Answer
              </button>
            </fieldset>
            <button
              onClick={quitQuiz}
              className="bg-red-500 text-white mt-4 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-400 transition ml-4"
            >
              Quit Quiz
            </button>
            <div className="mt-6">
              <p className="text-lg">Score: {score}</p>
              <p className="text-lg">Attempts: {attempts}</p>
            </div>
          </div>
        </section>
      ) : flashcardMode ? (
        <section className="">
          <h2 className="text-3xl font-semibold text-center mt-8">Flashcards</h2>
          <div className="text-center mt-6">
            <div className="border mx-auto max-w-md p-6 rounded-2xl shadow-lg bg-gradient-to-br from-pink-300 to-cyan-200">
              <h3 className="text-3xl font-bold text-gray-800">{elements[flashcardIndex].name}</h3>
              <p className="text-xl text-gray-600">{elements[flashcardIndex].symbol} ({elements[flashcardIndex].atomicNumber})</p>
              <p className="text-lg text-gray-500 mt-4">Group: {elements[flashcardIndex].group}, Period: {elements[flashcardIndex].period}</p>
              <p className="text-sm text-gray-400">Block: {elements[flashcardIndex].block}</p>
              <p className="text-lg font-semibold text-gray-800 mt-4">Atomic Mass: {elements[flashcardIndex].atomicMass}</p>
              <p className="text-sm text-gray-500 mt-4">{elements[flashcardIndex].info}</p>
              <p className="text-sm text-gray-500 mt-4">State of Matter: {elements[flashcardIndex].stateOfMatter}</p>
            </div>
            <div className="mt-6">
              <button
                onClick={previousFlashcard}
                className="bg-gradient-to-br from-pink-500 to-cyan-400 text-white px-4 py-3 rounded-full mr-4 hover:animate-gradient transition"
              >
                <FaArrowLeft className="inline-block mr-2" /> Previous
              </button>
              <button
                onClick={nextFlashcard}
                className="bg-gradient-to-br from-pink-500 to-cyan-400 text-white px-4 py-3 rounded-full hover:animate-gradient transition"
              >
                <FaArrowRight className="inline-block mr-2" />
                Next
              </button>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setFlashcardMode(false)}
                className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-400 transition mt-4"
              >
                Quit
              </button>
            </div>
          </div>
        </section>

      ) : null}

      <footer className="text-center mt-10 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Periodicity Explorer. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
