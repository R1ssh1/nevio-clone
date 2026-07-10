/** Converts a product name like "SS 316L Pipes & Tubes" into a URL slug
 *  e.g. "ss-316l-pipes-tubes" suitable for /products/:id
 */
export function toSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/&amp;/g, 'and')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9\s-]/g, '') // strip special chars
        .trim()
        .replace(/\s+/g, '-')
}

/**
 * SEO suffix appended to all product detail page URLs.
 * Adds keywords: Supplier, Exporter, Stockist, Seller, Mumbai, Best Price
 */
const SEO_SUFFIX = '-supplier-exporter-stockist-seller-mumbai'

/**
 * Convert a base slug to an SEO-enriched URL slug.
 * e.g. "stainless-steel-304-pipes-tubes" →
 *      "stainless-steel-304-pipes-tubes-supplier-exporter-stockist-seller-mumbai"
 */
export function toSeoSlug(baseSlug: string): string {
    // Avoid double-appending
    if (baseSlug.endsWith(SEO_SUFFIX)) return baseSlug
    return `${baseSlug}${SEO_SUFFIX}`
}

/**
 * Strip the SEO suffix from a URL slug to recover the base slug
 * used for product data lookup.
 * e.g. "stainless-steel-304-pipes-tubes-supplier-exporter-stockist-seller-mumbai"
 *      → "stainless-steel-304-pipes-tubes"
 */
export function fromSeoSlug(seoSlug: string): string {
    if (seoSlug.endsWith(SEO_SUFFIX)) {
        return seoSlug.slice(0, -SEO_SUFFIX.length)
    }
    return seoSlug
}
