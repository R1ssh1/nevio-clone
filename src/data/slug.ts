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
