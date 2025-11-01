const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Student",
    content: "Found an amazing math tutor who helped me ace my calculus exam. The platform is so easy to use!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent",
    content: "My daughter's grades improved significantly after finding a physics tutor here. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Student",
    content: "The quality of tutors on this platform is exceptional. They're knowledgeable and patient.",
    rating: 5,
  }
]

export const Reviews = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5">
          What Our Users Say
        </h2>
        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <h3 className="h5 fw-semibold">{review.name}</h3>
                    <p className="text-secondary">{review.role}</p>
                  </div>
                  <p className="text-body mb-3">{review.content}</p>
                  <div className="text-warning">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}