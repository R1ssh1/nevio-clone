import { useEffect } from 'react'

type SeoProps = {
    title: string
    description: string
    path?: string
}

export function Seo({ title, description, path }: SeoProps) {
    useEffect(() => {
        document.title = title

        const applyMeta = (
            selector: string,
            attributes: Record<string, string>,
            tag = 'meta',
        ) => {
            let element = document.head.querySelector<HTMLElement>(selector)

            if (!element) {
                element = document.createElement(tag)
                document.head.appendChild(element)
            }

            Object.entries(attributes).forEach(([key, value]) => {
                element!.setAttribute(key, value)
            })
        }

        applyMeta('meta[name="description"]', { name: 'description', content: description })
        applyMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow' })
        applyMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
        applyMeta('meta[property="og:title"]', { property: 'og:title', content: title })
        applyMeta('meta[property="og:description"]', {
            property: 'og:description',
            content: description,
        })
        applyMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
        applyMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
        applyMeta('meta[name="twitter:description"]', {
            name: 'twitter:description',
            content: description,
        })

        let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

        if (!canonical) {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            document.head.appendChild(canonical)
        }

        canonical.setAttribute('href', path ? `${window.location.origin}${path}` : window.location.href)
    }, [description, path, title])

    return null
}