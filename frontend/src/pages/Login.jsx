import React, { useState } from "react";
import Card from "../components/Card";
import { login } from "../services/api";
import { Link } from "react-router-dom";

function Login({ onSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await login(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ _id: data._id, name: data.name, email: data.email }));
      onSuccess();
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Welcome back</h1>
      <Card>
        <div className="section">
          <div className="formTitle">Login</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input full">
              <label className="label" htmlFor="email">Email</label>
              <input id="email" className="control" type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="input full">
              <label className="label" htmlFor="password">Password</label>
              <input id="password" className="control" type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
            </div>
            <div className="actions full">
              <button className="button" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
            </div>
            {error && <p className="message" style={{ color: "#b91c1c", background: "#fef2f2", borderColor: "#fecaca" }}>{error}</p>}
          </form>
          <div style={{ marginTop: 12, fontSize: 14 }}>
            Don&apos;t have an account? <Link to="/signup">Create a new account</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;

