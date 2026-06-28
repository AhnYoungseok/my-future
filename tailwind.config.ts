import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#10213f",
        slateblue: "#335c81",
        medical: "#0f766e",
        semi: "#3758f9",
        ink: "#172033"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(16, 33, 63, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
