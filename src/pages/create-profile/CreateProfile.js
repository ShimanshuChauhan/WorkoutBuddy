import { useState } from "react";
import styles from "./CreateProfile.module.css";

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
  });

  const [errors, setErrors] = useState({});

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  // validate a single field
  const validateField = (name, value) => {
    let message = "";

    if (["age", "weight", "height"].includes(name)) {
      if (!value.trim()) message = "Required";
      else if (isNaN(value) || Number(value) <= 0) message = "Invalid";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  // check if form is valid
  const isFormValid = () => {
    return (
      formData.age &&
      formData.weight &&
      formData.height &&
      Object.values(errors).every((err) => !err)
    );
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) =>
      validateField(key, formData[key])
    );

    if (!isFormValid()) return;

    console.log("Profile submitted:", formData);
    // TODO: replace with your profile save logic
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className={`${styles.input} ${errors.age
          ? styles.inputError
          : formData.age
            ? styles.inputSuccess
            : ""
          }`}
        required
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={handleChange}
        className={`${styles.input} ${errors.weight
          ? styles.inputError
          : formData.weight
            ? styles.inputSuccess
            : ""
          }`}
        required
      />
      <input
        type="number"
        name="height"
        placeholder="Height (cm)"
        value={formData.height}
        onChange={handleChange}
        className={`${styles.input} ${errors.height
          ? styles.inputError
          : formData.height
            ? styles.inputSuccess
            : ""
          }`}
        required
      />
      <button
        type="submit"
        className={`${styles.button} ${!isFormValid() ? styles.buttonDisabled : ""
          }`}
        disabled={!isFormValid()}
      >
        Save Profile
      </button>
    </form>
  );
}