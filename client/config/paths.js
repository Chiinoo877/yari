import fs from "node:fs";
import { fileURLToPath } from "node:url";
import getPublicUrlOrPath from "react-dev-utils/getPublicUrlOrPath.js";

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = new URL("..", import.meta.url);
const resolveApp = (relativePath) =>
  fileURLToPath(new URL(relativePath, appDirectory));

const appPackage = JSON.parse(fs.readFileSync(resolveApp("package.json")));

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === "development",
  appPackage.homepage,
  process.env.PUBLIC_URL
);

const buildPath = process.env.BUILD_PATH || "build";

const moduleFileExtensions = ["mjs", "js", "ts", "tsx", "json", "jsx"];

// config after eject: we're in ./config/
const config = {
  dotenv: resolveApp("../.env"),
  appPath: resolveApp("."),
  appBuild: resolveApp(buildPath),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appPackageJson: resolveApp("../package.json"),
  appSrc: resolveApp("src"),
  appTsConfig: resolveApp("tsconfig.json"),
  yarnLockFile: resolveApp("../yarn.lock"),
  publicUrlOrPath,
  libsPath: resolveApp("../libs"),
  moduleFileExtensions,
};

export default config;
