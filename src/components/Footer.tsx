import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3">
            <h3 className="text-white fs-5 fw-bold mb-3">TutorHub</h3>
            <p className="text-sm">
              Connecting students with expert tutors for better learning outcomes.
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="text-white fw-semibold mb-3">For Students</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/login" className="text-secondary text-decoration-none">Find a Tutor</Link>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">How it Works</a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="text-white fw-semibold mb-3">For Tutors</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/signup-as-tutor" className="text-secondary text-decoration-none">Become a Tutor</Link>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">Resources</a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">Success Stories</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="text-white fw-semibold mb-3">Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary text-decoration-none">Support</a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-4 text-center small">
          <p>&copy; {new Date().getFullYear()} TutorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}