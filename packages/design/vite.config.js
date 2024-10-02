import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import tailwindcss from "tailwindcss";

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "./index.js"),
			name: "WUI Design",
			fileName: "wui-design",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	plugins: [react(), cssInjectedByJsPlugin()],
});
