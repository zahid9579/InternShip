import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, // Added to clear fields after submission
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clears all input fields after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          {...register("name", { required: "Name is Required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter Phone No"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[986]\d{9}$/, // Ensures it starts with 9, 8, or 6 and is 10 digits
              message: "Phone number must start with 9, 8, or 6 and be 10 digits",
            },
          })}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          defaultValue=""
          {...register("gender", { required: "Please select one option" })}
        >
          <option value="" disabled>Choose</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
