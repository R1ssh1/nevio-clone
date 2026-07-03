import { useEffect, type ReactNode } from 'react'
import { Header } from './Header'

type LayoutProps = {
    children: ReactNode
}

export function Layout({ children }: LayoutProps) {
    useEffect(() => {
        const header = document.querySelector<HTMLElement>('.site-header')

        if (!header) {
            return
        }

        const root = document.documentElement

        const updateHeaderHeight = () => {
            root.style.setProperty('--site-header-height', `${header.offsetHeight}px`)
        }

        updateHeaderHeight()

        const resizeObserver = new ResizeObserver(updateHeaderHeight)
        resizeObserver.observe(header)
        window.addEventListener('resize', updateHeaderHeight)

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener('resize', updateHeaderHeight)
        }
    }, [])

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches) {
            return
        }

        const root = document.documentElement
        const cursor = document.createElement('span')
        cursor.className = 'custom-cursor'
        cursor.setAttribute('aria-hidden', 'true')
        document.body.appendChild(cursor)

        const clickableSelector = 'a, button, input, textarea, select, label, [role="button"], [tabindex]:not([tabindex="-1"])'

        const moveCursor = (event: MouseEvent) => {
            root.style.setProperty('--cursor-x', `${event.clientX}px`)
            root.style.setProperty('--cursor-y', `${event.clientY}px`)
            cursor.classList.add('is-visible')
        }

        const updateHoverState = (event: MouseEvent) => {
            const target = event.target instanceof Element ? event.target : null
            cursor.classList.toggle('is-active', Boolean(target?.closest(clickableSelector)))
        }

        const hideCursor = () => {
            cursor.classList.remove('is-visible', 'is-active')
        }

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', updateHoverState)
        document.addEventListener('mouseout', updateHoverState)
        window.addEventListener('mouseleave', hideCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', updateHoverState)
            document.removeEventListener('mouseout', updateHoverState)
            window.removeEventListener('mouseleave', hideCursor)
            cursor.remove()
        }
    }, [])

    return (
        <div className="site-shell">
            <Header />
            <main>{children}</main>
        </div>
    )
}
