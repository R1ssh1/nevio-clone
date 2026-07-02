import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const outputDir = path.resolve(projectRoot, 'public', 'assets', 'home')
const sourceFiles = [
    ['../Nevio Steel India __ Home_files/about-media-1.jpg', 'about-media-1.webp'],
    ['../Nevio Steel India __ Home_files/about-media-2.jpg', 'about-media-2.webp'],
    ['../Nevio Steel India __ Home_files/about-media-3.jpg', 'about-media-3.webp'],
    ['../Nevio Steel India __ Home_files/pipes-tubes.jpg', 'pipes-tubes.webp'],
    ['../Nevio Steel India __ Home_files/round-bars.jpg', 'round-bars.webp'],
    ['../Nevio Steel India __ Home_files/sheets-coils.jpg', 'sheets-coils.webp'],
    ['../Nevio Steel India __ Home_files/wires.jpg', 'wires.webp'],
    ['../Nevio Steel India __ Home_files/orthopaedic-industry.jpg', 'orthopaedic-industry.webp'],
    ['../Nevio Steel India __ Home_files/aerospace-industry.jpg', 'aerospace-industry.webp'],
    ['../Nevio Steel India __ Home_files/chemical-industry.jpg', 'chemical-industry.webp'],
    ['../Nevio Steel India __ Home_files/oil-gas-industry.jpg', 'oil-gas-industry.webp'],
    ['../Nevio Steel India __ Home_files/defense-industry.jpg', 'defense-industry.webp'],
    ['../Nevio Steel India __ Home_files/construction-industry.jpg', 'construction-industry.webp'],
    ['../Nevio Steel India __ Pipes & Tubes_files/titanium-pipes-tubes.jpg', 'titanium-pipes-tubes.webp'],
    ['../Stainless Steel 304 Pipes & Tubes _ ASTM A312 TP304 _ UNS S30400 _ Nevio Steel India_files/stainless-steel-304-pipes-tubes.jpg', 'stainless-steel-304-pipes-tubes.webp'],
]

async function run() {
    await mkdir(outputDir, { recursive: true })

    for (const [sourceRelativePath, outputFileName] of sourceFiles) {
        const sourcePath = path.resolve(projectRoot, sourceRelativePath)
        const outputPath = path.resolve(outputDir, outputFileName)

        await sharp(sourcePath)
            .resize({ width: 1400, withoutEnlargement: true })
            .webp({ quality: 72, effort: 4 })
            .toFile(outputPath)

        console.log(`Created ${path.relative(projectRoot, outputPath)}`)
    }

    const generated = await readdir(outputDir)
    console.log(`Generated ${generated.length} webp files in ${path.relative(projectRoot, outputDir)}`)
}

run().catch((error) => {
    console.error(error)
    process.exit(1)
})