import type { ReactNode } from 'react'

type PageHeroProps = {
    eyebrow: string
    title: string
    description: string
    breadcrumbs?: ReactNode
}

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
    return (
        <header className="page-hero container">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            {breadcrumbs ? <nav className="breadcrumbs">{breadcrumbs}</nav> : null}
        </header>
    )
}