# Favicon Setup

## How to Add Your Sister's Photo as the Favicon

1. **Prepare the Image:**
   - Use a square photo of your sister (crop it to be square)
   - Recommended size: 512x512 pixels or 256x256 pixels
   - Format: PNG (with transparent background is best) or JPG

2. **Add the Image:**
   - Rename the image file to `favicon.png`
   - Place it in this `public` folder
   - The file should be at: `public/favicon.png`

3. **Alternative Formats:**
   - If you have a `.ico` file, name it `favicon.ico` and update `index.html` to use it
   - If you have a `.jpg`, you can rename it to `favicon.png` (browsers will accept it)

4. **Rebuild and Deploy:**
   - Run `npm run build`
   - Push to GitHub (Vercel will auto-deploy)
   - The favicon will appear in browser tabs and bookmarks

## Quick Tips

- **Square photos work best** - crop the image to be square before adding
- **Clear face** - make sure her face is clearly visible in the center
- **Simple background** - a plain or blurred background works better than busy backgrounds
- **Test it** - after deploying, check the browser tab to see how it looks

## Online Tools to Help

- [Favicon Generator](https://favicon.io/favicon-converter/) - Convert any image to favicon
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generate all favicon sizes

