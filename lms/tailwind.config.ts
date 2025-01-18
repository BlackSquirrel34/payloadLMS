/** @type {import('tailwindcss').Config} */

import { withUt } from "uploadthing/tw";

export default withUt ({
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
});

