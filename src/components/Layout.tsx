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

        window.addEventListener('resize', updateHeaderHeight)

        return () => {
            window.removeEventListener('resize', updateHeaderHeight)
        }
    }, [])

    // Cursor logic removed — handled by Cursor.tsx inside App.tsx!

    return (
        <div className="site-shell">
            <Header />
            <main>{children}</main>
        </div>
    )
}
