import { Container, Navbar as BsNavbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap'
import logo from '../assets/logo.png' 

export const Navbar = () => {
  return (
    <BsNavbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        <BsNavbar.Brand href="#" className="text-primary fw-bold fs-4 d-flex align-items-center gap-1">
          TutorHub
          <img src={logo} alt="TutorHub Logo" style={{ height: '40px', width: '40px' }} />
        </BsNavbar.Brand>
        <Form className="d-flex mx-auto" style={{ width: '33%' }}>
          <FormControl
            type="search"
            placeholder="Search tutors, subjects, or areas..."
            className="rounded-pill"
          />
        </Form>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="profile-dropdown">
              <span style={{ marginRight: '0.5rem' }}>👤</span>
              Profile
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => window.open("/LogIn", "_self")}> Login as Student</Dropdown.Item>
              <Dropdown.Item onClick={() => window.open("/LogIn", "_self")}>Login as Tutor</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </BsNavbar>
  )
}