import ExerciseCard from "../../components/exercise-card/ExerciseCard";
// images
import yoga from "../../assets/Exercises/Yoga.png"
import weightLifting from "../../assets/Exercises/weight-liftiing.png"
import lunges from "../../assets/Exercises/lunges.png"

import styles from "./Home.module.css";
import { GoFlame } from "react-icons/go";
import { BiDumbbell } from "react-icons/bi";
import { GiMeditation } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import skipping from "../../assets/Exercises/skipping.png"

export default function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.leftContainer} >
        <div className={styles.featuredContainer} >
          <div className={styles.featuredName} >Skipping</div>
          <div className={styles.featuredImg} >
            <img
              src={skipping}
              alt=''
              lazy={true}
              className={styles.img}
            />
          </div>
          <div className={styles.featuredText} >“You will have everything you need to reach your personal fitness goals” </div>
        </div>
      </div>
      <div className={styles.rightContainer} >
        <div className={styles.statsContainer} >
          <div>
            <span className={styles.userName} >Hello julian,</span>
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.31)" }} >Ready for a challenge?</span>
          </div>

          <div className={styles.calorieContainer}>
            <div className={styles.calorieText} >Today's calories burnt</div>
            <div className={styles.calorieInfo}>
              <div className={styles.calorieCount}>800</div>
              <div className={styles.calorieLabel}>Calories</div>
            </div>
            <div className={styles.calorieIcon}>
              <GoFlame color="#0000005c" />
            </div>
          </div>

          <div className={styles.startContainer} >
            <button className={styles.startButton} > Start Exercise </button>
            <div >
              <span style={{ fontSize: "3rem", fontWeight: "600" }} >15</span> <span>mins</span>
            </div>
          </div>
        </div>
        <div className={styles.exerciseContainer} >
          <div className={styles.exerciseHeader} >
            <span style={{ fontWeight: 800 }} >Exercies</span>
            <span>See all</span>
          </div>
          <div className={styles.exerciseCards} >
            <ExerciseCard icon={<GiMeditation size={30} />} label={"Yoga"} srcImg={yoga} />
            <ExerciseCard icon={<FaRunning size={30} />} label={"Lunges"} srcImg={lunges} />
            <ExerciseCard icon={<BiDumbbell size={30} />} label={"Weight Lifting"} srcImg={weightLifting} />
            <ExerciseCard icon={<BiDumbbell size={30} />} label={"Weightlifting"} />
          </div>
        </div>
      </div>
    </div>
  );
}
