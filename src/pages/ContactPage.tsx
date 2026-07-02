import { useState, type FormEvent } from 'react'
import { contactDetails } from '../data/site'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageMeta } from './pageMeta'

export function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.contact.title}
                description={pageMeta.contact.description}
                path={pageMeta.contact.path}
            />
            <PageHero
                eyebrow="Contact Us"
                title="Contact form with placeholder details."
                description="The form is currently static while the clone is being assembled, but the structure is ready for a real inquiry flow."
            />

            <section className="container contact-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Full name
                        <input type="text" placeholder="Your name" />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="you@example.com" />
                    </label>
                    <label>
                        Phone
                        <input type="tel" placeholder="+91 00000 00000" />
                    </label>
                    <label>
                        Message
                        <textarea rows={5} placeholder="Tell us what you need" />
                    </label>
                    <button type="submit" className="primary-button">
                        Send Inquiry
                    </button>
                    {submitted ? (
                        <p className="contact-note" role="status" aria-live="polite">
                            Thanks. This is a placeholder submission for now, and the backend can be
                            connected later.
                        </p>
                    ) : null}
                </form>

                <aside className="info-card contact-card">
                    <h2>Placeholder contact data</h2>
                    <p>{contactDetails.address}</p>
                    <p>{contactDetails.email}</p>
                    <p>{contactDetails.phone}</p>
                    <p className="contact-note">
                        We will swap these values once the final business details are confirmed.
                    </p>
                </aside>
            </section>
        </div>
    )
}