import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "./index.js"),
			name: "WUI Core",
			fileName: "wui-core",
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
	plugins:[react()]
});
