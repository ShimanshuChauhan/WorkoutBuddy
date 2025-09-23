import { useEffect, useRef, useState } from "react";
import ExercisePlayer from "../../components/exercise-player/ExercisePlayer";
import ExerciseReady from "../../components/exercise-ready/ExerciseReady";

const exercises = [
  { name: "Jumping Jacks", duration: 30 },
  { name: "Push Ups", duration: 45 },
  { name: "Squats", duration: 40 },
  { name: "Lunges", duration: 50 },
  { name: "Plank", duration: 60 },
];

const READY_TIMER = 10;

function Exercise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(true);
  const [timer, setTimer] = useState(READY_TIMER);
  const [playState, setPlayState] = useState("play");
  const timerRef = useRef(null);

  function handlePlayState() {
    setPlayState(playState === "play" ? "pause" : "play");
  }

  function handleNext() {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsReady(true);
      setTimer(READY_TIMER);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setIsReady(true);
      setTimer(READY_TIMER);
    }
  }

  useEffect(() => {
    if (playState === "pause") return;

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);

          if (isReady) {
            setIsReady(false);
            return exercises[currentIndex].duration;
          } else {
            if (currentIndex + 1 < exercises.length) {
              setCurrentIndex((i) => i + 1);
              setIsReady(true);
              return READY_TIMER;
            }
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, isReady, playState]);

  return (
    <>
      {isReady ? (
        <ExerciseReady
          exercise={exercises[currentIndex]}
          timer={timer}
          onStart={() => setIsReady(false)}
        />
      ) : (
        <ExercisePlayer
          exercise={exercises[currentIndex]}
          timer={timer}
          playState={playState}
          handlePlayState={handlePlayState}
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentIndex={currentIndex}
          totalExercises={exercises.length}
        />
      )}
    </>
  );
}

export default Exercise;
