# Deployment Guide for Graduation App

This application is built with **Vite + React**. It produces a static site that can be deployed for free on platforms like Netlify or Vercel.

## Option 1: Netlify (Recommended - Drag & Drop)

1.  **Build the Project**:
    Run the following command in your terminal (if you haven't already):
    ```bash
    npm run build
    ```
    This creates a `dist` folder in your project directory containing the production-ready website.

2.  **Deploy**:
    - Go to [Netlify Drop](https://app.netlify.com/drop).
    - Drag and drop the `dist` folder onto the page.
    - Netlify will upload and deploy your site instantly.

3.  **Custom Domain (Optional)**:
    - Once deployed, you can change the site name (e.g., `graduacion-lilly.netlify.app`) in "Site Settings".

## Option 2: Vercel (CLI)

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project folder.
3.  Follow the prompts (accept defaults).

## Updating the App

If you make changes:
1.  Run `npm run build` again.
2.  Drag the new `dist` folder to Netlify (in the "Deploys" tab of your site).

## Important Notes

- **RSVP**: The form uses Formspree. Make sure to verify the email address if you created a new Formspree form, or use the existing one if it's yours.
- **Images**: The images are in `src/assets`. If you want to change them, replace `hero.jpg` and `second.jpg` and rebuild.
