import { useForm, ValidationError } from "@formspree/react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { pageMeta } from "./pageMeta";

function IconLocation() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    );
}

function IconPhone() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
    );
}

function IconMail() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function IconGlobe() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
    );
}

export function ContactPage() {
    const [searchParams] = useSearchParams();
    const [state, handleSubmit] = useForm("xdarbvjv");

    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.contact.title}
                description={pageMeta.contact.description}
                path={pageMeta.contact.path}
            />

            <PageHero
                eyebrow="Contact Us"
                title="Get in Touch with Vedantara Metal and Alloys Pvt Ltd"
                description="Looking for industrial metal products or a custom quotation? Fill out the form below and our team will get back to you shortly."
            />

            <section className="container contact-grid">
                {/* ── Dark contact info panel ── */}
                <aside className="contact-dark-card">
                    <div className="contact-dark-card__header">
                        <h2>Let's Talk</h2>
                        <p>Reach out to our team — we respond within one business day.</p>
                    </div>

                    <ul className="contact-items">
                        <li className="contact-item">
                            <span className="contact-item__icon"><IconLocation /></span>
                            <div className="contact-item__body">
                                <span className="contact-item__label">Head Office</span>
                                <span className="contact-item__value">
                                    48/50 Hafeez Bldg, Office No 8,<br />
                                    Cawasji Patel Tank Road,<br />
                                    Mumbai – 400004
                                </span>
                            </div>
                        </li>

                        <li className="contact-item">
                            <span className="contact-item__icon"><IconGlobe /></span>
                            <div className="contact-item__body">
                                <span className="contact-item__label">International Sales — Naresh Mali</span>
                                <a href="tel:+919967078222" className="contact-item__link">+91 99670 78222</a>
                                <a href="mailto:info@vedantarametal.com" className="contact-item__link">info@vedantarametal.com</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <span className="contact-item__icon"><IconPhone /></span>
                            <div className="contact-item__body">
                                <span className="contact-item__label">Domestic Sales — Shravan Kumar</span>
                                <a href="tel:+919920850631" className="contact-item__link">+91 99208 50631</a>
                                <a href="mailto:sales@vedantarametal.com" className="contact-item__link">sales@vedantarametal.com</a>
                            </div>
                        </li>

                        <li className="contact-item">
                            <span className="contact-item__icon"><IconMail /></span>
                            <div className="contact-item__body">
                                <span className="contact-item__label">General Enquiries</span>
                                <a href="mailto:info@vedantarametal.com" className="contact-item__link">info@vedantarametal.com</a>
                            </div>
                        </li>
                    </ul>

                    <a href="tel:+919920850631" className="contact-dark-card__cta">
                        <IconPhone />
                        Call Us 24 × 7 · +91 99208 50631
                    </a>
                </aside>

                {/* ── Contact Form ── */}
                {state.succeeded ? (
                    <div className="contact-form contact-success">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--navy)' }}>
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="9 12 11 14 15 10" />
                        </svg>
                        <h2>Inquiry Sent!</h2>
                        <p>Thank you for reaching out. Our team will get back to you within one business day.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            Full Name
                            <input type="text" name="name" placeholder="Your Name" required />
                        </label>

                        <label>
                            Email Address
                            <input type="email" name="email" placeholder="you@example.com" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </label>

                        <label>
                            Phone Number
                            <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
                        </label>

                        <label>
                            Subject
                            <input type="text" name="subject" placeholder="Subject" defaultValue={searchParams.get("subject") ?? ""} />
                        </label>

                        <label>
                            Message
                            <textarea rows={5} name="message" placeholder="Tell us about your requirement..." required />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </label>

                        <button type="submit" className="primary-button" disabled={state.submitting}>
                            {state.submitting ? "Sending..." : "Send Inquiry"}
                        </button>

                        <ValidationError errors={state.errors} />
                    </form>
                )}
            </section>

            <section className="container" style={{ marginBottom: '4rem' }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120689.44423851523!2d72.78453472097061!3d19.04169726210606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="420"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Vedantara Metal &amp; Alloys Location"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}