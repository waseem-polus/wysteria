const { execSync } = require("child_process");
const path = require("path");

const isProdEnv = process.env.VERCEL_ENV === "production";

const execWithDir = (command, dir) => {
    console.log(`Executing: ${command} in ${dir}`);
    execSync(command, { stdio: "inherit", cwd: dir });
};

const resolveDependencies = () => {
    if (isProdEnv) {
        console.log("Building for Production Environment...");
        execWithDir("npm install -y", path.resolve(__dirname));
        return;
    }

    console.log("Building for Preview Environment...");

    const monotrepoRootDir = path.resolve(__dirname, "../")
    const packageDir = path.resolve(__dirname, "../packages/design");
    const docsDir = path.resolve(__dirname);

    execWithDir("npm i -y", monotrepoRootDir);
    execWithDir("npm run build", packageDir);

    execWithDir("npm link", packageDir);

    execWithDir("npm install -y", docsDir);
    execWithDir("npm link @wysteria/design", docsDir);
};

try {
    resolveDependencies();
} catch (error) {
    console.error(
        `Failed during the ${isProdEnv? "Production" : "Preview"} build process:`,
        error,
    );
    process.exit(1);
}

const withNextra = require("nextra")({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});
module.exports = withNextra();
