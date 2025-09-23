import { useState } from "react";
import styles from "./CreateExercise.module.css";
import { FaDumbbell } from "react-icons/fa";
import gifs from "../../utils/gifs"; // import the mapping
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const exercises = [
  "HIP_ROTATION",
  "PUNCHES",
  "SQUATS",
  "CRUNCHES",
  "JUMPING",
  "BURBEES_AND_JUMP",
  "PUSHUP",
  "T_PLANK",
  "SPLIT_JUMP",
  "JUMPING_JACK",
];

// Header Component
const Header = ({ selectedCount }) => (
  <div className={styles.header}>
    <h1 className={styles.title}>Create Your Workout</h1>
    <p className={styles.subtitle}>
      Select exercises for your personalized routine
    </p>
    {selectedCount > 0 && <div className={styles.badge}>{selectedCount} selected</div>}
  </div>
);

// Action Bar Component  
const ActionBar = ({ selectedCount, onClear, onContinue }) => {
  if (selectedCount === 0) return null;

  return (
    <div className={styles.actionBar}>
      <button onClick={onClear} className={styles.clearBtn}>
        Clear All
      </button>
      <button onClick={onContinue} className={styles.continueBtn}>
        Continue ({selectedCount})
      </button>
    </div>
  );
};

function CreateExercise() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (exercise) => {
    setSelected((prev) =>
      prev.includes(exercise)
        ? prev.filter((e) => e !== exercise)
        : [...prev, exercise]
    );
  };

  const clearAll = () => setSelected([]);

  const handleContinue = () => {
    console.log("Selected exercises:", selected);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header selectedCount={selected.length} />

      {/* Large / Medium Screen Layout */}
      <div className={styles.cardGrid}>
        {exercises.map((exercise) => (
          <div
            key={exercise}
            className={`${styles.card} ${selected.includes(exercise) ? styles.cardSelected : ""
              }`}
            onClick={() => toggleSelect(exercise)}
          >
            <div className={styles.media}>
              <DotLottieReact
                src={gifs[exercise]}
                loop
                autoplay
              />

            </div>
            <h3 className={styles.name}>{exercise.replace(/_/g, " ")}</h3>
            <input
              type="checkbox"
              checked={selected.includes(exercise)}
              readOnly
              className={styles.checkbox}
            />
          </div>
        ))}
      </div>

      {/* Small Screen Layout */}
      <div className={styles.list}>
        {exercises.map((exercise) => (
          <div
            key={exercise}
            className={`${styles.listItem} ${selected.includes(exercise) ? styles.listItemSelected : ""
              }`}
            onClick={() => toggleSelect(exercise)}
          >
            <FaDumbbell className={styles.icon} />
            <span>{exercise.replace(/_/g, " ")}</span>
            <input
              type="checkbox"
              checked={selected.includes(exercise)}
              readOnly
              className={styles.checkbox}
            />
          </div>
        ))}
      </div>

      {/* Action Bar */}
      <ActionBar
        selectedCount={selected.length}
        onClear={clearAll}
        onContinue={handleContinue}
      />
    </div>
  );
}

export default CreateExercise;
