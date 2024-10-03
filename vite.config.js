import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Ensure this matches your vercel.json
  },
  plugins: [react()],
});
