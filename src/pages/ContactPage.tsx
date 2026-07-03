import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { contactDetails } from "../data/site";
import { PageHero } from "../components/PageHero";
import { Seo } from "../components/Seo";
import { pageMeta } from "./pageMeta";

export function ContactPage() {
    const [searchParams] = useSearchParams();

    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: searchParams.get("subject") ?? "",
        message: "",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);

        setSubmitted(true);
    };

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

                <form className="contact-form" onSubmit={handleSubmit}>

                    <label>
                        Full Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Email Address
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Phone Number
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Subject
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Message
                        <textarea
                            rows={6}
                            name="message"
                            placeholder="Tell us about your requirement..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Send Inquiry
                    </button>

                    {submitted && (
                        <p
                            className="contact-note"
                            role="status"
                            aria-live="polite"
                        >
                            Thank you! Your inquiry has been recorded.
                            This is currently a placeholder form and
                            backend integration will be added later.
                        </p>
                    )}

                </form>

                <aside className="info-card contact-card">

                    <h2>Contact Information</h2>

                    <p>
                        <strong>Address</strong><br />
                        {contactDetails.address}
                    </p>

                    <p>
                        <strong>Email</strong><br />
                        {contactDetails.email}
                    </p>

                    <p>
                        <strong>Phone</strong><br />
                        {contactDetails.phone}
                    </p>

                    <p className="contact-note">
                        Business Hours:
                        <br />
                        Monday - Saturday
                        <br />
                        9:00 AM - 6:00 PM
                    </p>

                </aside>

            </section>
        </div>
    );
}   