import CreateProfile from "../CreateProfile"; // <-- import your profile form
import styles from "./ProfileLayout.module.css";
import authImage from "../../../assets/auth/auth-image.png";

export default function ProfileLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <div>
            <h1 className={styles.header}>Create Your Profile</h1>
            <p className={styles.text}>
              Tell us more about you to personalize your fitness journey
            </p>
          </div>

          {/* Profile Form */}
          <CreateProfile />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={authImage}
            alt="Auth Illustration"
            loading="lazy"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
