import { Container, Button } from 'react-bootstrap'

export const Hero = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h1 className="display-4 fw-bold mb-4">
            Struggling in School? Looking for Additional Help?
          </h1>
          <p className="lead mb-5 text-secondary">
            Get Connected with Top Tutors in Your Area
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button size="lg">
              
              Sign Up Now
              
              </Button>
            <Button variant="outline-primary" size="lg">Log In</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}