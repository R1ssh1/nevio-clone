import React from 'react';
import './BrochureDownload.css';

interface BrochureDownloadProps {
    className?: string;
}

export function BrochureDownload({ className = '' }: BrochureDownloadProps) {
    return (
        <div className={`brochure-download ${className}`}>
            <div className="brochure-download__inner">
                <h2 className="brochure-download__title">Brochures</h2>
                <p className="brochure-download__desc">
                    View our brochure for an easy to read guide on all of the services offer.
                </p>
                <a href="/brochure.pdf" download className="brochure-download__btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="18"
                        height="18"
                        className="brochure-download__icon"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                    DOWNLOAD .PDF
                </a>
            </div>
        </div>
    );
}
