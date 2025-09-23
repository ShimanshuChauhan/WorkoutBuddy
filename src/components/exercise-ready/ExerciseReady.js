import styles from "./ExerciseReady.module.css";

// const exercise = { name: "hello" }

function ExerciseReady({ timer, exercise }) {
  // Format timer as MM:SS
  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timer % 60).toString().padStart(2, "0");

  return (
    <div className={styles.container}>
      {/* Exercise Name */}
      <div className={styles.text}>{exercise.name}</div>

      {/* Exercise Image */}
      <div className={styles.img}>
        <img
          src={`/${exercise.name.replace(" ", "").toLowerCase()}.gif`}
          alt={exercise.name}
        />
      </div>

      {/* Timer */}
      <div className={styles.timer}>{`${minutes}:${seconds}`}</div>
    </div>
  );
}

export default ExerciseReady;
