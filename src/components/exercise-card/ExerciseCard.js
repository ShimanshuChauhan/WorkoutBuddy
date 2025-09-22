import styles from "./ExerciseCard.module.css";

function ExerciseCard({ icon, label, srcImg }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {/* You can drop in your react-icons here */}
        {icon}
      </div>
      <div className={styles.label}>
        {label}
      </div>
      <div className={styles.imgWrapper} >
        <img
          src={srcImg}
          alt=""
          loading="lazy"
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default ExerciseCard;
