import { useEffect, useMemo, useState } from 'react'
import axios from 'axios';

type ApiTutor = {
	name: string
	// The backend example uses a key with a slash; access via bracket notation
	// true => Graduate, false => Undergraduate (assumption; adjust if backend differs)
	grade: string
	email: string
	rating: number
}

type Tutor = {
	name: string
	grade: string
	email: string
	rating: number
}

// Normalize any incoming shape to our internal Tutor type
function normalizeTutors(input: unknown): Tutor[] {
	// If the backend returns { tutors: ApiTutor[] } or { data: ApiTutor[] } or just ApiTutor[]
	const maybeArray = ((): unknown[] | null => {
		if (Array.isArray(input)) return input
		if (input /*&& typeof input === 'object'*/) {
			console.log("I AM TRUE")
			const obj = input as Record<string, unknown>
			if (Array.isArray(obj.tutors)) return obj.tutors
			if (Array.isArray(obj.data)) return obj.data
			// First array-like value in object
			for (const v of Object.values(obj)) {
				if (Array.isArray(v)) return v
			}
		}
		return null
	})()

	if (!maybeArray) return [];

	return maybeArray
		.filter((x): x is ApiTutor =>
			x != null && typeof x === 'object' && 'name' in x && 'email' in x && 'rating' in x && 'grade' in x
		)
		.map((t) => ({
			name: t.name,
		    grade: t.grade,
			email: t.email,
			rating: Math.max(0, Math.min(5, Number(t.rating) || 0)),
		}))

		
}

export const FindATutor = () => {
	const [tutors, setTutors] = useState<Tutor[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		let mounted = true
		
		

		async function fetchTutors() {
			setLoading(true)
			setError(null)
			try {
				// TODO: Replace this mock with a real API call, e.g.:
				// const res = await fetch('/api/tutors')
				// const data = await res.json()
				// const normalized = normalizeTutors(data)
				const resposnse = await axios.get("api/find");

				
				// Mock payload to simulate backend response
			/*	const mockPayload: ApiTutor[] = [
					{ name: 'Alex Carter', ["Grad/Undergrad"]: true, email: 'alex.carter@example.com', rating: 5 },
					{ name: 'Jamie Lee', ["Grad/Undergrad"]: false, email: 'jamie.lee@example.com', rating: 4 },
					{ name: 'Priya Patel', ["Grad/Undergrad"]: true, email: 'priya.patel@example.com', rating: 5 },
				] */

				const normalized = normalizeTutors((resposnse.data))
				if (mounted) setTutors(normalized)
							} catch {
						if (mounted) setError('Failed to load tutors. Please try again later.')
			} finally {
				if (mounted) setLoading(false)
			}
		}

		fetchTutors()

		return () => {
			mounted = false
		}
	}, [])

	const content = useMemo(() => {
		if (loading) {
			return (
				<div className="text-center py-5 text-secondary">Loading tutors…</div>
			)
		}
		if (error) {
			return (
				<div className="alert alert-danger" role="alert">{error}</div>
			)
		}
		if (!tutors.length) {
			return (
				<div className="text-center py-5 text-secondary">No tutors found right now.</div>
			)
		}

		return (
			<div className="row g-4">
				{tutors.map((tutor, idx) => (
					<div key={idx} className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<div className="card-body d-flex flex-column">
								<div className="mb-2 d-flex justify-content-between align-items-start">
									<h3 className="h5 fw-semibold mb-0">{tutor.name}</h3>
									<span className={`badge ${tutor.grade == "Graduate" ? 'bg-primary-subtle text-primary-emphasis' : 'bg-secondary-subtle text-secondary-emphasis'}`}>
										{tutor.grade}
									</span>
								</div>
								<div className="mb-2 text-warning">
									{Array.from({ length: tutor.rating }).map((_, i) => (
										<i key={i} className="bi bi-star-fill me-1" />
									))}
									{Array.from({ length: 5 - tutor.rating }).map((_, i) => (
										<i key={`empty-${i}`} className="bi bi-star me-1 text-secondary" />
									))}
								</div>
								<div className="mt-auto">
									<a href={`mailto:${tutor.email}`} className="link-primary">{tutor.email}</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}, [loading, error, tutors])

	return (
		<section className="py-5 bg-white">
			<div className="container">
				<h2 className="display-5 fw-bold text-center mb-4">Find a Tutor</h2>
				<p className="text-center text-secondary mb-5">Browse available tutors and reach out directly.</p>
				{content}
			</div>
		</section>
	)
}

export default FindATutor
