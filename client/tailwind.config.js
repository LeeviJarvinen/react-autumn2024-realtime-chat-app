/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-patter': "url('/images/bg/background.webp')",
        'profile-image': "url('/images/bg/profile.webp')",
        'banner-bg': "url('/images/bg/banner-background.webp')",
      },

      fontFamily: {
        Rethink: ["Rethink sans", "serif"]
      },
      height: {
        '128': '32rem',
        '164': '42rem',
      },
    },
  },
  flyonui: {
    themes: ["light"]
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}