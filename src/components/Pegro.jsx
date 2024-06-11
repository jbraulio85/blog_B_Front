import { useRef } from "react";
import { pegro } from "../assets/img";
import pedro from "../assets/audio/pedro.mp3";
import "./pegro.css";

export const Pegro = () => {
  const audioRef = useRef();

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="sm:text-4xl text-2xl font-bold my-6">
    <h1>PegroBonus</h1>
      <div className="spinner" onClick={playAudio}>
        <div className="img-container">
          <img src={pegro} alt="pegro" />
        </div>
        <audio ref={audioRef} src={pedro} />{" "}
      </div>
    </div>
  );
};
