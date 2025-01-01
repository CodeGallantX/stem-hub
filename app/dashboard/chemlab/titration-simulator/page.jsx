"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import reagentsData from "/data/chemlab/reagents.json";
import equipmentData from "/data/chemlab/equipment.json";
import { FaVolumeMute, FaVolumeUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TitrationSimulator = () => {
  const [step, setStep] = useState(1);
  const [workspace, setWorkspace] = useState([]);
  const [titrationValues, setTitrationValues] = useState([]);
  const [finalCalculation, setFinalCalculation] = useState("");
  const [musicPlaying, setMusicPlaying] = useState(true);
  const audio =
    typeof Audio !== "undefined"
      ? new Audio("/audio/background-music.mp3")
      : null;

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.play();
      setMusicPlaying(true);
    }

    return () => {
      if (audio) audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.play();
      setMusicPlaying(true);
    }
  };

  const handleAddToWorkspace = (item) => {
    if (!workspace.some((i) => i.id === item.id)) {
      setWorkspace([...workspace, item]);
    }
  };

  const handleTitration = (volume) => {
    if (volume && !isNaN(volume)) {
      setTitrationValues([...titrationValues, parseFloat(volume)]);
    }
  };

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

  const goNextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const goPreviousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-orange-100 p-6 flex flex-col items-center">
      <div className="text-center text-3xl font-extrabold text-purple-800 mb-6">
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
          className="px-4 py-2 bg-purple-600 text-white rounded-md flex items-center gap-2 hover:bg-purple-700 disabled:opacity-50"
        >
          Next Step <FaArrowRight />
        </button>
      </div>

      <div className="mb-4 flex items-center">
        <button
          onClick={toggleMusic}
          className="text-purple-600 hover:text-purple-800"
        >
          {musicPlaying ? <FaVolumeMute size={30} /> : <FaVolumeUp size={30} />}
        </button>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <div>
            <h2 className="text-purple-600 font-semibold mb-2">Equipment</h2>
            <div className="grid grid-cols-3 gap-3">
              {equipmentData.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:shadow-lg bg-white p-2 rounded-lg text-center"
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
          <div>
            <h2 className="text-purple-600 font-semibold mb-2">Reagents</h2>
            <div className="grid grid-cols-3 gap-3">
              {reagentsData.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:shadow-lg bg-white p-2 rounded-lg text-center"
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
          <div className="sm:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700">Workspace</h3>
            <div className="flex gap-4 flex-wrap">
              {workspace.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-2 rounded-lg text-center"
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
