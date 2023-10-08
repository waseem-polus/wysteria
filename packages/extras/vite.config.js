import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "./index.js"),
			name: "WUI Extras",
			fileName: "wui-extras",
		},
		css: {
			modules: true, // Enable CSS Modules if needed
		}
	}
});
