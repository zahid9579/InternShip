import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/api"; // Import API function
import "./Form.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      alert("Registration Successful!");
      navigate("/"); // Redirect to login page
    } catch (error) {
      alert(error.message || "Registration failed");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            placeholder="First Name"
            {...register("first_name", { required: "First name is required" })}
          />
          {errors.first_name && (
            <p className="error">{errors.first_name.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            placeholder="Last Name"
            {...register("last_name", { required: "Last name is required" })}
          />
          {errors.last_name && (
            <p className="error">{errors.last_name.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            placeholder="Email"
            {...register("gender", { required: "gender is required" })}
          />
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>

        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            autoComplete="off"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="first_name">Address</label>
          <input
            type="text"
            id="address"
            placeholder="address "
            {...register("address", { required: "address is required" })}
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
