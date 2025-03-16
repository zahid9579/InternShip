import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../utils/api"; // Import API function
import "./Form.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit, // Get handleSubmit from react-hook-form
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");

      const response = await loginUser(data);
      if (response.token) {
        localStorage.setItem("token", response.token); // Store token for authentication
        alert("Login Successful!");
        navigate("/dashboard"); // Redirect to dashboard or another page
      } 
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}> {/* Corrected */}
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

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
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting || loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
