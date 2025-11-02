import { Container, Button } from 'react-bootstrap'

export const TutorCTA = () => {
  return (
    <section className="py-5 bg-primary text-white">
      <Container>
        <div className="text-center" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 className="display-5 fw-bold mb-4">
            Looking to Tutor? Make Money Teaching What You Love!
          </h2>
          <p className="lead mb-5 text-white-50">
            Share your knowledge, boost your learning, and earn while helping others succeed.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button onClick={() => window.open("/SignUpAsTutor", "_self")}
              size="lg"
              variant="light"
              className="text-primary"
            >
              Sign Up as Tutor
            </Button>
            <Button onClick={()=> window.open("/LearnMore", "_self")}
              size="lg"
              variant="outline-light"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}