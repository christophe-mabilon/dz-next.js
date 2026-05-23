import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import unusedImports from "eslint-plugin-unused-imports";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "build/**"],
  },

  js.configs.recommended,

  ...compat.extends("next/core-web-vitals"),

  {
    plugins: {
      "unused-imports": unusedImports,
    },

    rules: {
      "import/no-anonymous-default-export": "off",
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "no-undef": "off",
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",

          varsIgnorePattern: "^_",

          args: "after-used",

          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
