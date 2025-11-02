import { useState, type FormEvent } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export default function LogIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Welcome back, ${form.email}!`);
  };

  return (
    <div style={{ backgroundColor: "#f8f9fc", minHeight: "100vh" }} className="d-flex align-items-center">
      <Container style={{ maxWidth: "450px" }}>

        {/* Hero Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#0A1A44" }}>Log In</h1>
          <p className="text-muted">
            Welcome back to TutorHub — let's continue your journey.
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-sm border-0 p-4" style={{ borderRadius: "14px", backgroundColor: "#ffffff" }}>
          <Form onSubmit={handleSubmit}>
            
            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@school.edu"
                value={form.email}
                onChange={handleChange}
                required
                style={{ padding: "12px" }}
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-4" style={{ position: "relative" }}>
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
                style={{ padding: "12px", paddingRight: "42px" }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "38px",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
              </span>
            </Form.Group>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-100 fw-semibold"
              style={{
                borderRadius: "10px",
                backgroundColor: "#0A75FF",
                border: "none",
                padding: "12px",
                fontSize: "1rem",
              }}
            >
              Log In
            </Button>
          </Form>
        </Card>

        {/* Link to Signup */}
        <p className="text-center mt-3 text-muted">
          New here?{" "}
          <a href="/signup" style={{ color: "#0A75FF", fontWeight: 600, textDecoration: "none" }}>
            Create an account
          </a>
        </p>
      </Container>
    </div>
  );
}