/* ─────────────────────────────────────────────
   ClientsSection — auto-scrolling logo carousel
   ───────────────────────────────────────────── */

const clients = [
    { name: 'Client 1',  logo: '/assets/clients/client1.jpeg' },
    { name: 'Client 2',  logo: '/assets/clients/client2.jpeg' },
    { name: 'Client 3',  logo: '/assets/clients/client3.jpeg' },
    { name: 'Client 4',  logo: '/assets/clients/client4.jpeg' },
    { name: 'Client 5',  logo: '/assets/clients/client5.jpeg' },
    { name: 'Client 6',  logo: '/assets/clients/client6.jpeg' },
    { name: 'Client 7',  logo: '/assets/clients/client7.jpeg' },
    { name: 'Client 8',  logo: '/assets/clients/client8.jpeg' },
    { name: 'Client 9',  logo: '/assets/clients/client9.jpeg' },
    { name: 'Client 10', logo: '/assets/clients/client10.jpeg' },
    { name: 'Client 11', logo: '/assets/clients/client11.jpeg' },
    { name: 'Client 12', logo: '/assets/clients/client12.jpeg' },
]

export function ClientsSection() {
    // duplicate for seamless infinite scroll
    const track = [...clients, ...clients]

    return (
        <section className="clients-section">
            <div className="container clients-heading">
                <p className="eyebrow">Trusted Partners</p>
                <h2>Our Clients</h2>
                <p className="clients-subtext">
                    Trusted by industries and companies across multiple sectors worldwide.
                </p>
            </div>

            <div className="clients-carousel-wrap">
                <div className="clients-track">
                    {track.map((client, idx) => (
                        <div className="clients-logo-card" key={`${client.name}-${idx}`}>
                            <img
                                src={client.logo}
                                alt={client.name}
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
