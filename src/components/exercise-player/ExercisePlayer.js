import styles from "./ExercisePlayer.module.css";

function ExercisePlayer({
  playState,
  handlePlayState,
  timer,
  exercise,
  handleNext,
  handlePrev,
  currentIndex,
  totalExercises,
}) {
  // Format timer as MM:SS
  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  return (
    <div className={styles.container}>
      {/* Exercise Name */}
      <div className={styles.text}>{exercise.name}</div>

      {/* Exercise Media */}
      <div className={styles.media}>
        {/* You can replace this with <video> or Lottie */}
        <img
          src={`/${exercise.name.replace(" ", "").toLowerCase()}.gif`}
          alt={exercise.name}
        />
      </div>

      {/* Timer */}
      <div className={styles.timer}>{`${minutes}:${seconds}`}</div>

      {/* Controls */}
      <div className={styles.controls}>
        {/* Prev */}
        <button
          className={styles.controlBtn}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ⏮️
        </button>

        {/* Play / Pause */}
        <button className={styles.controlBtn} onClick={handlePlayState}>
          {playState === "play" ? "▶️" : "⏸️"}
        </button>

        {/* Next */}
        <button
          className={styles.controlBtn}
          onClick={handleNext}
          disabled={currentIndex === totalExercises - 1}
        >
          ⏭️
        </button>

        {/* End Workout */}
        <button className={styles.controlBtnEnd}>End</button>
      </div>
    </div>
  );
}

export default ExercisePlayer;
