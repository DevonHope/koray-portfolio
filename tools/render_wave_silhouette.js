// Simple Puppeteer script that captures frames from the local HTML and writes PNG frames for ffmpeg
// Usage: node render_wave_silhouette.js  --url file:///absolute/path/to/wave_silhouette.html --out ./frames --w 1920 --h 1080 --fps 30 --duration 8

const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const argv = require('minimist')(process.argv.slice(2))

;(async () => {
  const url = argv.url || 'file://' + path.resolve(__dirname, 'wave_silhouette.html')
  const outDir = path.resolve(argv.out || path.resolve(__dirname, 'frames'))
  const width = parseInt(argv.w || 1920, 10)
  const height = parseInt(argv.h || 1080, 10)
  const fps = parseInt(argv.fps || 30, 10)
  const duration = parseFloat(argv.duration || 8) // seconds

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  await page.setViewport({ width, height })
  await page.goto(url, { waitUntil: 'networkidle2' })

  const totalFrames = Math.ceil(fps * duration)
  console.log(`Rendering ${totalFrames} frames at ${fps}fps -> ${outDir}`)

  for (let i = 0; i < totalFrames; i++) {
    const time = (i / fps)
    // if your animation depends on the timeline, you can inject the current time via CSS variables or window properties
    const filename = path.join(outDir, `frame-${String(i).padStart(5,'0')}.png`)
    await page.screenshot({ path: filename, type: 'png' })
    if (i % 10 === 0) console.log(`captured ${i}/${totalFrames}`)
    // advance by waiting (lets the SVG animation keep running)
    await page.waitForTimeout(1000 / fps)
  }

  await browser.close()
  console.log('Done. Use ffmpeg to encode frames into a video (see README_wave_export.md)')
})().catch(err => { console.error(err); process.exit(1) })
