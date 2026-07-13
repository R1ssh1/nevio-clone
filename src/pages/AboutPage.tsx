import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { AboutSection } from '../components/AboutSection'
import { WhyChooseUsSection } from '../components/WhyChooseUsSection'
import { VisionMissionSection } from '../components/VisionMissionSection'
import { pageMeta } from './pageMeta'

export function AboutPage() {
    return (
        <div className="page-stack">
            <Seo
                title={pageMeta.about.title}
                description={pageMeta.about.description}
                path={pageMeta.about.path}
            />
            <PageHero
                eyebrow="About Us"
                title="About Us"
                description="At Vedantara Metal & Alloys, we take pride in being one of the most reliable manufacturers, suppliers, and exporters of titanium and stainless steel in the global market."
                breadcrumbs={
                    <>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>About Us</span>
                    </>
                }
            />

            {/* Shared About section (same as home page) */}
            <AboutSection />

            <WhyChooseUsSection />

            <VisionMissionSection />
        </div>
    )
}
