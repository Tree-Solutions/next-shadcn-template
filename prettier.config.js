// prettier.config.js
module.exports = {
  importOrder: [
    "^(next/(.*)$)|^(next$)",
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "^@/components/(.*)$|^components/(.*)$",
    "^#/lib/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
    ".*\\.css$",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 120,
  tabWidth: 2,
  plugins: [require.resolve("prettier-plugin-tailwindcss"), require.resolve("@trivago/prettier-plugin-sort-imports")],
};
