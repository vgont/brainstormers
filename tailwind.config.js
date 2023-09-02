/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      'mw': '394px',
    },
    extend: {
      colors: {
        'blue-button': 'rgba(0, 70, 192, 0.60)',
        'gray-button': '#c5c5c5',
        'hf-blue': '#00a1fc;',
      },
      backgroundImage: {
    },
  },
  plugins: []
}
}

