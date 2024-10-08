import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default {
  base: "/",
  assetsInclude: ["**/*.woff2", "**/*.woff", "**/*.eot", "**/*.ttf"],
  server: {
    cors: true,
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@": path.resolve(__dirname, "src"),
      "@analytics": path.resolve(__dirname, "src/analytics"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@context": path.resolve(__dirname, "src/context"),
      "@data": path.resolve(__dirname, "src/data"),
      "@documents": path.resolve(__dirname, "src/documents"),
      "@print": path.resolve(__dirname, "src/print"),
      "@font": path.resolve(__dirname, "src/font"),
      "@images": path.resolve(__dirname, "src/images"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@scss": path.resolve(__dirname, "src/scss"),
    },
  },
  plugins: [react()],
};
