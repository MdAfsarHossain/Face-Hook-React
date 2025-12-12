import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // theme: {
  //   container: {
  //     center: true,
  //     padding: "1rem",
  //   },
  //   extend: {
  //     fontFamily: {
  //       inter: ["Inter", "sans-serif"],
  //     },
  //     colors: {
  //       lwsGreen: "#00D991",
  //       deepDark: "#17181C",
  //       mediumDark: "#1E1F24",
  //       lighterDark: "#27292F",
  //     },
  //   },
  // },
  plugins: [react(), tailwindcss()],
});
