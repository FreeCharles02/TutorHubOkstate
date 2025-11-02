import { useEffect, useRef } from 'react'

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
  },
  {
    id: 4,
    name: "James Nguyen",
    role: "Parent",
    content: "TutorHub made it easy to find a reliable math tutor for my son. His grades improved dramatically!",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophia Patel",
    role: "Tutor",
    content: "I love how seamless the platform is. It's easy to connect with students and manage sessions.",
    rating: 4,
  },
  {
    id: 6,
    name: "Liam Johnson",
    role: "Student",
    content: "The scheduling feature is super convenient, and all my tutors have been great at explaining complex topics.",
    rating: 5,
  },
  {
    id: 7,
    name: "Olivia Chen",
    role: "Parent",
    content: "Finding the right tutor used to be stressful. TutorHub made the whole process quick and trustworthy.",
    rating: 4,
  },
  {
    id: 8,
    name: "Ethan Williams",
    role: "Tutor",
    content: "TutorHub provides great tools for communication and lesson tracking — it really streamlines my work.",
    rating: 5,
  }
]

export const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 1 

    const scroll = () => {
      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount
   
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
    }

    const intervalId = setInterval(scroll, 30)
    return () => clearInterval(intervalId)
  }, [])
 
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5">
          What Our Users Say
        </h2>
        <div 
          ref={scrollRef}
          className="overflow-hidden"
          style={{ 
            display: 'flex',
            gap: '.5rem',
            overflowX: 'hidden',
            scrollBehavior: 'auto'
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={`${review.id}-${index}`}
              style={{ 
                minWidth: '300px',
                maxWidth: '300px',
                width: '300px',
                flex: '0 0 300px'
              }}
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body">
  <div className="mb-3 d-flex align-items-center gap-3">
    <div 
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#0d6efd',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        flexShrink: 0
      }}
    >
      {review.name.charAt(0)}
    </div>
    <div>
      <h3 className="h5 fw-semibold mb-0">{review.name}</h3>
      <p className="text-secondary mb-0">{review.role}</p>
    </div>
  </div>
  <div className="text-warning mb-1">
    {[...Array(review.rating)].map((_, i) => (
      <i key={i} className="bi bi-star-fill me-1"></i>
    ))}
    <span className="text-muted ms-2">{review.rating}/5</span>
  </div>
  <p className="text-body mb-1">{review.content}</p>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}