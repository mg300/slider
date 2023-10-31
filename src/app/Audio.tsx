import React, { useRef, useState, useEffect } from "react";

function Audio({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startVolume = 1.0;
  const fadeDuration = 3000;

  useEffect(() => {
    if (src) {
      const audioElement = document.createElement("audio");
      audioElement.src = src;
      audioElement.volume = startVolume;
      audioRef.current = audioElement;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [src]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);

      intervalRef.current = window.setTimeout(fadeOutAudio, 3000);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      audioRef.current.volume = startVolume;
      setIsPlaying(false);
    }
  };

  const fadeOutAudio = () => {
    if (audioRef.current) {
      let currentVolume = audioRef.current.volume;
      const step = currentVolume / (fadeDuration / 100);

      const fadeInterval = setInterval(() => {
        currentVolume -= step;
        if (currentVolume > 0) {
          audioRef.current!.volume = currentVolume;
        } else {
          clearInterval(fadeInterval);
          audioRef.current!.pause();
          audioRef.current!.volume = startVolume;
          setIsPlaying(false);
        }
      }, 100);
    }
  };

  return (
    <div>
      {isPlaying ? <button onClick={pauseAudio}>Pause Audio</button> : <button onClick={playAudio}>Play Audio</button>}
    </div>
  );
}

export default Audio;
