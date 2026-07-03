import type { ReactNode } from 'react'

type PageHeroProps = {
    eyebrow: string
    title: string
    description: string
    breadcrumbs?: ReactNode
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
    return (
        <header className="page-hero-banner">
            <div className="page-hero-banner__bg">
                <img
                    src="/assets/home/product-7.webp"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                />
            </div>
            <div className="page-hero-banner__overlay" />
            <div className="container page-hero-banner__content">
                {breadcrumbs ? <nav className="breadcrumbs breadcrumbs--light">{breadcrumbs}</nav> : null}
                <p className="eyebrow page-hero-banner__eyebrow">{eyebrow}</p>
                <h1>{title}</h1>
                <p className="page-hero-banner__desc">{description}</p>
            </div>
        </header>
    )
}