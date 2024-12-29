"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import reagentsData from "/data/chemlab/reagents.json";
import equipmentData from "/data/chemlab/equipment.json";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TitrationSimulator = () => {
  const [step, setStep] = useState(1);
  const [workspace, setWorkspace] = useState([]);
  const [titrationValues, setTitrationValues] = useState([]);
  const [finalCalculation, setFinalCalculation] = useState("");
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audio =
    typeof Audio !== "undefined"
      ? new Audio("/audio/background-music.mp3")
      : null;

  const toggleMusic = () => {
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.loop = true;
      audio.play();
      setMusicPlaying(true);
    }
  };

  // Add equipment/reagents to workspace
  const handleAddToWorkspace = (item) => {
    if (!workspace.some((i) => i.id === item.id)) {
      setWorkspace([...workspace, item]);
    }
  };

  // Record titration data
  const handleTitration = (volume) => {
    if (volume && !isNaN(volume)) {
      setTitrationValues([...titrationValues, parseFloat(volume)]);
    }
  };

  // Calculate results
  const handleCalculate = () => {
    if (titrationValues.length > 0) {
      const averageVolume = (
        titrationValues.reduce((sum, v) => sum + v, 0) / titrationValues.length
      ).toFixed(2);
      setFinalCalculation(`The average titration volume is ${averageVolume} mL.`);
    } else {
      setFinalCalculation("No titration values recorded.");
    }
  };

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      if (audio) audio.pause();
    };
  }, []);

  const goNextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const goPreviousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-6 flex flex-col items-center">
      <div className="text-center text-2xl font-bold text-blue-700 mb-4">
        Titration Simulator
      </div>

      <div className="flex justify-between items-center w-full max-w-4xl mb-6">
        <button
          onClick={goPreviousStep}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md flex items-center gap-2 hover:bg-gray-400 disabled:opacity-50"
        >
          <FaArrowLeft /> Previous Step
        </button>
        <div className="text-lg font-semibold text-gray-700">
          Step {step}:{" "}
          {step === 1 && "Select Equipment and Reagents"}
          {step === 2 && "Measure Reagents"}
          {step === 3 && "Perform the Titration"}
          {step === 4 && "Record Values and Calculate"}
        </div>
        <button
          onClick={goNextStep}
          disabled={step === 4}
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50"
        >
          Next Step <FaArrowRight />
        </button>
      </div>

      {/* Toggle Music */}
      <div className="mb-4">
        <button
          onClick={toggleMusic}
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
        >
          {musicPlaying ? <FaPause /> : <FaPlay />}{" "}
          {musicPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>

      {/* Step 1: Select Equipment and Reagents */}
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Equipment Tab */}
          <div>
            <h2 className="text-blue-600 font-semibold mb-2">Equipment</h2>
            <div className="grid grid-cols-3 gap-3">
              {equipmentData.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:shadow-md bg-white p-2 rounded-md text-center"
                  onClick={() => handleAddToWorkspace(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <div className="text-sm">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reagents Tab */}
          <div>
            <h2 className="text-blue-600 font-semibold mb-2">Reagents</h2>
            <div className="grid grid-cols-3 gap-3">
              {reagentsData.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:shadow-md bg-white p-2 rounded-md text-center"
                  onClick={() => handleAddToWorkspace(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                  <div className="text-sm">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Workspace */}
          <div className="sm:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700">Workspace</h3>
            <div className="flex gap-4 flex-wrap">
              {workspace.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-2 rounded-md text-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <div className="text-sm">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other steps remain unchanged but improved UI with responsiveness */}
      {step === 2 && (
        <div className="text-center max-w-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Measure the required reagents for the experiment.
          </h3>
        </div>
      )}
      {step === 3 && (
        <div className="text-center max-w-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Perform the titration and determine the endpoint.
          </h3>
        </div>
      )}
      {step === 4 && (
        <div className="text-center max-w-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Titration Results
          </h3>
        </div>
      )}
    </div>
  );
};

export default TitrationSimulator;
