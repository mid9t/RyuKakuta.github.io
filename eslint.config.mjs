import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      "out/**",
      ".next/**",
      "public/**",
      "node_modules/**",
      ".legacy-export/**",
    ],
  },
];

export default eslintConfig;
