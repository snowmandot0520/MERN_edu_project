module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './tsconfig.node.json'],
        sourceType: "module",
    },
    // ignorePatterns: [
    //     ".eslintrc.cjs"
    // ],
}