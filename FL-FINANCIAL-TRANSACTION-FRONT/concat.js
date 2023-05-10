const concat = require("concat");
(async function build() {
    const files = [
        "./dist/fl-financial-transaction-front/runtime.js",
        "./dist/fl-financial-transaction-front/polyfills.js",
        "./dist/fl-financial-transaction-front/main.js",                    
    ];
    await concat(files, "./dist/fl-financial-transaction-front/financial-transaction.js");
})();