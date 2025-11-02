import { useState, type ChangeEvent, type FormEvent } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

interface SignUpForm {
  name: string;
  grade: string;
  major: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [form, setForm] = useState<SignUpForm>({
    name: "",
    grade: "",
    major: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Welcome to TutorHub, ${form.name}! 🎓`);
    // TODO — send form data to backend
  };

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }} className="d-flex align-items-center">
      <Container style={{ maxWidth: "480px" }}>
        
        {/* Header Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#0A1A44" }}>Create Your Account</h2>
          <p className="text-muted fs-6">
            Join TutorHub and take control of your academic journey.
          </p>
        </div>

        {/* Form Card */}
        <Card className="shadow-sm p-4 border-0" style={{ borderRadius: "14px" }}>
          <Form onSubmit={handleSubmit}>

            {/* Full Name */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Grade */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Grade</Form.Label>
              <Form.Select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
                <option>Graduate Student</option>
              </Form.Select>
            </Form.Group>

            {/* Major */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Major</Form.Label>
              <Form.Control
                type="text"
                name="major"
                placeholder="Computer Science, Business, etc."
                value={form.major}
                onChange={handleChange}
                required
              />
            </Form.Group>

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
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit */}
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
              Create Account
            </Button>
          </Form>
        </Card>

        {/* Login Link */}
        <p className="text-center mt-3 text-muted">
          Already have an account?
          <a href="/login" style={{ color: "#0A75FF", textDecoration: "none" }}> Log in</a>
        </p>
      </Container>
    </div>
  );
}