import { Container, Row, Col, Card } from "react-bootstrap";

export default function LearnMore() {
  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "Inter, sans-serif" }}>
      
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(120deg, #0A1A44 0%, #0A75FF 100%)",
          padding: "120px 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container style={{ maxWidth: "900px" }}>
          <h1 className="fw-bold display-4 mb-3">
            Empowering Academic Success
          </h1>
          <p className="fs-4 mb-4" style={{ opacity: 0.9, lineHeight: "1.6" }}>
            TutorHub connects students with verified peer mentors who have
            proven academic excellence — delivering tailored, trustworthy 
            support for every course.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <Container style={{ maxWidth: "900px" }} className="py-5">

        {/* Why Section */}
        <section className="mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#0A1A44" }}>
            Why TutorHub?
          </h2>

          <p className="fs-5 text-muted mb-3" style={{ lineHeight: "1.7" }}>
            College is demanding — and navigating academic challenges shouldn’t be an
            isolating experience or a financial burden. Traditional tutoring options are 
            often expensive and generalized, while informal student help can be inconsistent.
          </p>

          <p className="fs-5 text-muted mb-3" style={{ lineHeight: "1.7" }}>
            TutorHub bridges the gap. We pair students with high-performing peers who have
            excelled in the exact courses they need help in — offering relevant insight, 
            verified credibility, and a mentorship-driven learning experience.
          </p>

          <p className="fs-5 fw-semibold" style={{ color: "#0A75FF" }}>
            Because real success happens when knowledge is shared — not gatekept.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4" style={{ color: "#0A1A44" }}>
            Our Core Values
          </h2>

          <Row className="g-4">
            {[
              {
                title: "Verified Excellence",
                text: "Only top academic performers with verified transcripts serve as tutors.",
              },
              {
                title: "Relevant Expertise",
                text: "Get guidance from someone who completed your course — not years ago, but recently.",
              },
              {
                title: "Affordable Access",
                text: "Quality support should never be out of reach. TutorHub keeps learning accessible.",
              },
              {
                title: "Community & Mentorship",
                text: "We cultivate academic collaboration, confidence, and personal growth.",
              },
              {
                title: "Results Through Clarity",
                text: "Structured, practical help designed for lasting academic improvement.",
              },
            ].map((card, i) => (
              <Col md={6} key={i}>
                <Card
                  className="border-0 shadow-sm h-100"
                  style={{
                    padding: "18px",
                    borderRadius: "14px",
                    backgroundColor: "#FDFDFE",
                  }}
                >
                  <Card.Body>
                    <h5 className="fw-bold" style={{ color: "#0A1A44" }}>
                      {card.title}
                    </h5>
                    <p className="text-muted" style={{ lineHeight: "1.6" }}>
                      {card.text}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Vision */}
        <section className="mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "#0A1A44" }}>
            Our Vision
          </h2>
          <p className="fs-5 text-muted" style={{ lineHeight: "1.7" }}>
            To build a trusted peer-learning network across universities, 
            empowering students to excel academically and professionally 
            through shared knowledge and meaningful mentorship.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center p-5 shadow-sm"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <h3 className="fw-bold mb-3" style={{ color: "#0A1A44" }}>
            Begin Your TutorHub Journey
          </h3>
          <p className="fs-5 text-muted mb-4" style={{ lineHeight: "1.6" }}>
            Whether you're seeking guidance or ready to lead — TutorHub is here to support your path.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a 
              href="/signup"
              className="btn btn-primary btn-lg px-4"
              style={{ borderRadius: "12px", backgroundColor: "#0A75FF", border: "none" }}
            >
              Get Tutoring
            </a>
            <a 
              href="/signupastutor"
              className="btn btn-outline-primary btn-lg px-4"
              style={{
                borderRadius: "12px",
                color: "#0A75FF",
                borderColor: "#0A75FF",
              }}
            >
              Become a Tutor
            </a>
          </div>
        </section>

      </Container>
    </div>
  );
}