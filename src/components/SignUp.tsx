import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {Button} from 'react-bootstrap';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [form, setForm] = useState<SignUpForm>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Welcome, ${form.name}!\nYour email is, ${form.email}!\nYour password is, ${form.password}!`);
   
    // TODO: send signup data to backend later
  };

  return (
    <div style={{ maxWidth: "4000px", margin: "auto", padding: "20px" }}>
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <Button onClick={handleSubmit}
            size='sm'>
          Sign Up
        </Button>
      </form>
    </div>
  );
}