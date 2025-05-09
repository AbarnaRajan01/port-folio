import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Disable JSX entity rule
      "@typescript-eslint/no-explicit-any": "warn", // Change `any` from error to warning
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variable warnings
    },
  },
];

export default eslintConfig;
