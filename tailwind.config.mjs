// tailwind.config.js
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
            // animation: {
            //   'spin-slow': 'spin 50s linear infinite',
            // },

            keyframes: {
              popIn: {
                '0%': { transform: 'scale(0)' },
                '100%': { transform: 'scale(1)' },
              },
            },
            animation: {
              popIn: 'popIn 0.4s ease-out forwards',
              'spin-slow': 'spin 50s linear infinite',
              
            },
    },
  },
  plugins: [],
};