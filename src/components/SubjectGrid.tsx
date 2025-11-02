export const SubjectGrid = () => {
  const subjects = [
    { name: "Reading", icon: "📚" },
    { name: "Math", icon: "🔢" },
    { name: "Science", icon: "🔬" },
    { name: "History", icon: "📜" },
    { name: "Programming", icon: "💻" },
    { name: "Music", icon: "🎵" },
    { name: "Art", icon: "🎨"},
    { name: "Other", icon: "✨" }
  ]

    return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-3">
          Start Your Journey...
        </h2>
        <p className="text-center text-muted mb-5">Choose a subject to find the perfect tutor</p>
        <div className="row g-4">
          {subjects.map((subject) => (
            <div key={subject.name} className="col-md-4 col-lg-3">
              <a href={subject.name === "Other" ? "https://www.youtube.com/watch?v=IxX_QHay02M&list=RDIxX_QHay02M&start_radio=1" : "/signup"} className="text-decoration-none" target={subject.name === "Other" ? "_blank" : undefined} rel={subject.name === "Other" ? "noopener noreferrer" : undefined}>
                <div className="card h-100 shadow-sm text-center p-4" style={{ cursor: 'pointer' }}>
                  <div style={{ fontSize: '3rem' }}>{subject.icon}</div>
                  <h5 className="mt-3 fw-semibold text-dark">{subject.name}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}