import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) message = "Required";
      else if (!emailRegex.test(value)) message = "Invalid";
    }

    if (name === "password") {
      if (!value.trim()) message = "Required";
      else if (value.length < 6) message = "Too short";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  // check if form is valid
  const isFormValid = () => {
    return (
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.password.length >= 6 &&
      Object.values(errors).every((err) => !err)
    );
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    if (!isFormValid()) return;

    console.log("Form submitted:", formData);
    // TODO: replace with your login logic (API call, etc.)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={`${styles.input} ${errors.email ? styles.inputError : formData.email ? styles.inputSuccess : ""
          }`}

        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className={`${styles.input} ${errors.password ? styles.inputError : formData.password ? styles.inputSuccess : ""
          }`}
        required
      />
      <button
        type="submit"
        className={`${styles.button} ${!isFormValid() ? styles.buttonDisabled : ""}`}
        disabled={!isFormValid()}
      >
        Login
      </button>
    </form>
  );
}
