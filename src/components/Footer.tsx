import { contactDetails } from '../data/site'

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <section>
                    <h2>Nevio Steel India</h2>
                    <p>Titanium and stainless steel supply across industrial and export markets.</p>
                </section>
                <section>
                    <h3>Contact</h3>
                    <p>{contactDetails.address}</p>
                    <p>{contactDetails.email}</p>
                    <p>{contactDetails.phone}</p>
                </section>
                <section>
                    <h3>Product range</h3>
                    <p>Pipes &amp; Tubes, Round Bars, Sheets &amp; Coils, and Wires.</p>
                </section>
            </div>
        </footer>
    )
}