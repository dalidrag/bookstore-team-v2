const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const getPublicUrl = appPackageJson => require(appPackageJson).homepage;

module.exports = {
  appBuild: resolveApp("dist/public"),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveApp("src/index.tsx"),
  publicUrl: getPublicUrl(resolveApp("package.json"))
};
