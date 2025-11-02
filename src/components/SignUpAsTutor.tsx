import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";

interface TutorForm {
  name: string;
  email: string;
  password: string;
  grade: string;
  contact: string;
  transcript: File | null;
}

export default function SignUpAsTutor() {
  const [form, setForm] = useState<TutorForm>({
    name: "",
    email: "",
    password: "",
    grade: "",
    contact: "",
    transcript: null,
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm({ ...form, transcript: file });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Tutor Sign Up Data:", form);

    // TODO: send data + file to backend using FormData
    alert(`Welcome Tutor, ${form.name}!`);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Sign Up as Tutor</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="example@school.edu"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Grade Level</Form.Label>
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

        <Form.Group className="mb-3">
          <Form.Label>Contact Information</Form.Label>
          <Form.Control
            name="contact"
            placeholder="Phone, Discord, etc"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Upload Transcript</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={handleFileUpload}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Create Tutor Account
        </Button>
      </Form>
    </div>
  );
}