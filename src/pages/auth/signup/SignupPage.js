import { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    full_name: "",
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

    if (name === "full_name") {
      if (!value.trim()) message = "Full Name is required";
      else if (value.trim().length < 3) message = "Full Name must be at least 3 characters";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) message = "Email is required";
      else if (!emailRegex.test(value)) message = "Invalid email address";
    }

    if (name === "password") {
      if (!value.trim()) message = "Password is required";
      else if (value.length < 6) message = "Password must be at least 6 characters";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  // check if form is valid
  const isFormValid = () => {
    return (
      formData.full_name.trim().length >= 3 &&
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

    console.log("Signup form submitted:", formData);
    // TODO: call signup API
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
        className={`${styles.input} ${errors.full_name ? styles.inputError : formData.full_name ? styles.inputSuccess : ""
          }`}

        required
      />
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
        Register
      </button>
    </form>
  );
}
