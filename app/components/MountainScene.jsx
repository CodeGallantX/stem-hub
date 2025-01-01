"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function MountainScene({ levels }) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const router = useRouter();
  const handleAnswer = (selectedOption) => {
    if (selectedOption === levels[currentLevel].correctAnswer) {
      setIsCorrect(true);
      setTimeout(() => {
        setCurrentLevel((prev) => prev + 1);
        setIsCorrect(null);
      }, 1000);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setCurrentLevel(0);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-800 via-gray-900 to-purple-900 animate-gradient flex flex-col items-center justify-center">
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Game Over!</h1>
            <p className="mb-6">Try again from the beginning.</p>
            <button
              onClick={resetGame}
              className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-full text-lg font-bold"
            >
              Restart
            </button>
          </div>
        </div>
      )}

      {!gameOver && (
        <>
          {currentLevel < levels.length ? (
            <>
              <button
                className="absolute top-6 left-4 bg-yellow-500 px-4 py-2 rounded-full float-left text-gray-900 "
                onClick={() => (router.push('/dashboard/mathquest'))}
              >
                Back to Home
              </button>
              <h1 className="text-4xl text-white font-bold mb-6">Level {currentLevel + 1}</h1>
              <p className="text-2xl text-gray-300 mb-4">
                {levels[currentLevel].question}
              </p>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
                {levels[currentLevel].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="bg-yellow-500 hover:bg-yellow-400 px-4 py-3 text-gray-900 rounded-full text-xl font-medium"
                  >
                    {option}
                  </button>
                ))}
              </div>
              {isCorrect !== null && (
                <p className={`mt-4 font-bold ${isCorrect ? "text-green-400" : "text-red-400"}`}>
                  {isCorrect ? "Correct!" : "Try Again!"}
                </p>
              )}
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Congratulations!</h1>
              <p className="text-xl text-gray-300 mb-4">
                You have completed all levels!
              </p>
              <a href="#sceneCompleted" className="bg-yellow-500 rounded-full px-4 py-3 text-gray-900 text-center">Next Arena</a>
            </div>
          )}
        </>
      )}
    </div>
  );
}
