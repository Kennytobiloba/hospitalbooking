/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:"#3572EF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geistSans: ['var(--font-geist-sans)', 'sans-serif'], // Custom font
        geistMono: ['var(--font-geist-mono)', 'monospace'], // Custom font
        poppins: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
