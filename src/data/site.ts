export const navigation = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    {
        label: 'Products',
        path: '/products',
        children: [
            { label: 'Pipes & Tubes', path: '/products/pipes-tubes' },
            { label: 'Plates & Sheets', path: '/products/sheets-coils' },
            { label: 'Round Bars', path: '/products/round-bars' },
            { label: 'Flanges', path: '/products/flanges' },
            { label: 'Forged Fittings', path: '/products/forged-fittings' },
            { label: 'Buttweld Fittings', path: '/products/buttweld-fittings' },
            { label: 'Fasteners', path: '/products/fasteners' },
            { label: 'Valves', path: '/products/valves' },
            { label: 'Special Alloys', path: '/products/special-alloys' },
        ],
    },
    { label: 'Quality', path: '/quality-policy' },
    { label: 'Contact Us', path: '/contact-us' },
]

export const contactDetails = {
    address: 'Corp Office: Plot No-48/50, Hafeez Bldg, Cawaji Patel Road, Mumbai-400004',
    factoryAddress: 'Factory: Plot No 1312, Steel Market, Kalamboli, Navi Mumbai-410218',
    email: 'info@vedantarametal.com',
    phone: '+91 99208 50631',

    internationalSales: {
        name: 'Naresh Mali',
        phone: '+91 99670 78222',
        email: 'info@vedantarametal.com',
    },
    domesticSales: {
        name: 'Shrawan Kumar',
        phone: '+91 99208 50631',
        email: 'sales@vedantarametal.com',
    },
    emergency: '+91 99208 50631',
}

export const homepageHeroDescription =
    'We are the best supplier of industrial metal products. Vedantara Metal & Alloys Pvt Ltd delivers stainless steel, carbon steel and alloy steel products with superior performance, durability, and reliability across global markets.'

export const homepageBannerSlides = [
    {
        eyebrow: 'Welcome To Vedantara Metal & Alloys Pvt Ltd',
        title: 'We are the best supplier of industrial metal products — stainless steel, carbon steel and alloy steel',
        description:
            'Engineered for superior performance, durability, and reliability across global markets.',
        primaryLabel: 'Know More',
        primaryPath: '/products',
        secondaryLabel: 'Contact Us',
        secondaryPath: '/contact-us',
        image: '/images/factory.png',
        alt: 'Vedantara Metal & Alloys factory',
    },
    {
        eyebrow: 'Welcome To Vedantara Metal & Alloys Pvt Ltd',
        title: 'We Are Best Suppliers of Stainless Steel Products.',
        description:
            'Vedantara Metal & Alloys Pvt Ltd is a leading manufacturer, exporter and supplier of Stainless Steel, Carbon Steel, and Alloy Steel Products, ensuring superior performance, durability, and resistance to extreme conditions.',
        primaryLabel: 'Know More',
        primaryPath: '/products',
        secondaryLabel: 'Contact Us',
        secondaryPath: '/contact-us',
        image: '/assets/home/stainless-steel-304-pipes-tubes.webp',
        alt: 'Stainless steel product showcase',
    },
]

export const homepageAboutCopy =
    'At Vedantara Metal & Alloys Pvt Ltd, we take pride in being one of the most reliable manufacturers, suppliers, and exporters of industrial metal and stainless steel in the global market. Headquartered in Mumbai, India, we are an ISO 13485-2016 certified company with a strong reputation for delivering quality products backed by professional service and technical excellence.'

export const homepageWhyChooseUs = [
    {
        title: 'Quality Assurance',
        text: 'The quality assurance system is guided by principles that support our unique working culture which incorporates respect.',
        metric: 100,
        suffix: '%',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
    },
    {
        title: 'Largest Inventory',
        text: 'We help customers develop their energy resources bringing world class capability and delivering it locally.',
        metric: 10,
        suffix: 'k+',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'
    },
    {
        title: 'Quick Delivery',
        text: 'We exercise stringent quality control measures for ensuring the accurate dimensions and mechanical properties of our products.',
        metric: 24,
        suffix: 'h',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
    },
    {
        title: 'Customer Support',
        text: 'Build strong relationships with our customers - which we achieve, for example, by employing and training local workforces.',
        metric: 24,
        suffix: '/7',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>'
    },
    {
        title: 'Third Party Inspection',
        text: 'Our team of experts maintain a vigil on the quality of the products. Every single piece is attached with test certificates and reports.',
        metric: 100,
        suffix: '%',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>'
    },
    {
        title: 'Global Network',
        text: 'We supply our products to all over globe New Mexico, New York, Nepal, Bahrain, Kuwait, Oman, Qatar, UK, Indonesia, Kuwait, Mexico, Malaysia etc...',
        metric: 50,
        suffix: '+',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="36" height="36"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
    },
]

export const homepageIndustryIntro =
    'We deliver high-performance industrial metal and stainless steel products that meet the demanding needs of various industries across the globe. Our materials are trusted for their strength, durability, and reliability in critical applications.'

export const homepageStats = [
    { value: '400+', label: 'Drilling Fields' },
    { value: '290+', label: 'Expert Workers' },
    { value: '35+', label: 'Award Winner' },
    { value: '25+', label: 'Years Experience' },
]

export const productCards = [
    {
        title: 'Pipes & Tubes',
        href: '/products/pipes-tubes',
        image: '/assets/home/pipes-tubes.webp',
    },
    {
        title: 'Plates & Sheets',
        href: '/products/sheets-coils',
        image: '/assets/home/sheets-coils.webp',
    },
    {
        title: 'Round Bars',
        href: '/products/round-bars',
        image: '/assets/home/round-bars.webp',
    },
    {
        title: 'Flanges',
        href: '/products/flanges',
        image: '/assets/products/flanges.webp',
    },
    {
        title: 'Forged Fittings',
        href: '/products/forged-fittings',
        image: '/assets/products/forged-fittings.webp',
    },
    {
        title: 'Buttweld Fittings',
        href: '/products/buttweld-fittings',
        image: '/assets/products/buttweld-fittings.webp',
    },
    {
        title: 'Fasteners',
        href: '/products/fasteners',
        image: '/assets/products/fasteners.webp',
    },
    {
        title: 'Valves',
        href: '/products/valves',
        image: '/assets/products/boiler.jpeg',
    },
]

export const industryCards = [
    {
        title: 'Petrochemical Industry',
        image: '/assets/home/orthopaedic-industry.webp',
    },
    {
        title: 'Marine Industry',
        image: '/assets/home/aerospace-industry.webp',
    },
    {
        title: 'Power Industry',
        image: '/assets/home/power-industry.webp',
    },
    {
        title: 'Pharmaceutical Industry',
        image: '/assets/home/pharmaceutical.webp',
    },
    {
        title: 'Aerospace Industry',
        image: '/assets/home/defense-industry.webp',
    },
    {
        title: 'Chemical Industry',
        image: '/assets/home/chemical-industry.webp',
    },
    {
        title: 'Automotive Industry',
        image: '/assets/home/automotive-industry.webp',
    },
    {
        title: 'Construction Industry',
        image: '/assets/home/construction-industry.webp',
    },
]
