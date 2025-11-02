import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Button } from "react-bootstrap";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${form.email}`);
    // TODO: send login data to backend later
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          type="email"
          required
        />

        <input
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          type="password"
          required
        />

        <Button type="submit" style={{ width: "100%" }}>
          Login
        </Button>
      </form>
    </div>
  );
}