Wave silhouette export
======================

This folder contains an animated SVG HTML and a small Puppeteer script to capture frames and turn them into an MP4.

Files:
- `wave_silhouette.html` — full-screen SVG animation sized for 1920x1080 export.
- `render_wave_silhouette.js` — Puppeteer script to capture frames.

Steps to produce MP4 (on the server or locally):

1) Install node deps (puppeteer and minimist). Puppeteer will download Chromium; ensure you have enough storage.

```bash
npm install puppeteer minimist
```

2) Render frames (example: 8 seconds at 30fps):

```bash
node tools/render_wave_silhouette.js --out ./tools/frames --w 1920 --h 1080 --fps 30 --duration 8
```

This will create `tools/frames/frame-00000.png` .. `frame-00NNN.png`.

3) Encode frames into a progressive MP4 using ffmpeg (example settings):

```bash
ffmpeg -y -framerate 30 -i tools/frames/frame-%05d.png -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart wave_silhouette.mp4
```

4) Optional: add a silent audio track or loop, or convert to WebM:

```bash
ffmpeg -y -framerate 30 -i tools/frames/frame-%05d.png -c:v libvpx-vp9 -b:v 0 -crf 30 -pix_fmt yuv420p wave_silhouette.webm
```

Notes / troubleshooting:
- Puppeteer requires a working Chrome/Chromium environment. If running on a headless server you'll likely need to run as root or configure `--no-sandbox` (the script already uses that flag).
- If you prefer not to install Puppeteer, you can open `wave_silhouette.html` in a modern desktop browser and use a screen capture tool to record the animation.
- To reduce artifacting, render at a higher resolution (e.g., 3840x2160) and downscale with ffmpeg.

If you want, I can also:
- Add a tiny npm script in `package.json` to run the renderer and ffmpeg in one step.
- Generate a shorter preview GIF instead of MP4.
- Tweak the SVG (speed, colors, silhouette shape) — tell me the exact look you want.
