module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui', 'flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        regular: ['Inter', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      spacing: {
        GambarBGHome: '648px',
      },
    },
    colors: {
      //Basic Color
      transparent: "transparent",
      current: "currentColor",
      currentColor: 'currentColor',
      success: '#28a745',
      white: "#ffffff",
      black: "#000000",

      //Black Color 
      black700: "#28262D",
      black800: "#0D0C0F",
      black900: "#08080A",

      //All Gray Color
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray200: "#e5e7eb",
      gray300: "#d1d5db",
      gray400: "#9ca3af",
      gray500: "#71717a",
      gray600: "#4b5563",
      gray700: "#374151",
      gray800: "#1f2937",
      gray900: "#111827",

      //Red Color
      red: "#EC2028",
      red500: "#ef4444",
      red600: "#dc2626",

      //Yellow Color
      yellow400: "#facc15",

      //Green Color
      green500: "#22c55e",

      //Sky Color
      sky400: "#38bdf8",

      //Blue Color
      blue300: "#93c5fd",
      blue400: "#60a5fa",
      blue500: "#3b82f6",
      blue600: "#2563eb",
      blue700: "#1d4ed8",
      blue800: "#1e40af",

      //Indigo Color
      indigo400: "#818cf8",
      indigo500: "#6366f1",
      indigo600: "#4f46e5",

      //Violet Color
      violet600: "#7c3aed",

      //Purple Color
      purple500: '#a855f7'

    },
  },
};
