const { web } = require("projen");
const project = new web.NextJsTypeScriptProject({
  name: "wc3devs",
  description: "wc3devs page",
  repository: "https://github.com/wc3devs/wc3devs.git",
  keywords: ["wc3", "warcraft 3", "wc3devs"],
  
  release: true,
  defaultReleaseBranch: "main",
  pullRequestTemplateContents: [
    "---",
    "By submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license.",
  ],
  
  minNodeVersion: "16.0.0",
  workflowNodeVersion: "16.18.1",
  
  devDeps: ["@next/eslint-plugin-next", "prettier-plugin-tailwindcss"],
  
  docgen: true,
  codeCov: true,
  tailwind: true,
  dependabot: true,
  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: {
      plugins: ["prettier-plugin-tailwindcss"],
    },
  },
  
  autoMerge: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ["edelwud"],
  },
});
project.synth();
