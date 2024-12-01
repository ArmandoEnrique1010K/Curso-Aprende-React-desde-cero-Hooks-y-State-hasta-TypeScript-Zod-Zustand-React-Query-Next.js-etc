/** @type {import('tailwindcss').Config} */
export default {
  // Coloca lo siguiente para integrar tailwind en todos los archivos incluyendo los que lleven la extensión js, ts, etc
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
