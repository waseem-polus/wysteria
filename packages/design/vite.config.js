import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
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
					"react": "React"
				}
			}
		}
	},
	plugins:[
		react(),
		cssInjectedByJsPlugin()
	]
});
