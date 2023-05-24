
module.exports = {
  extends: [
    "stylelint-config-standard", 
    "stylelint-config-prettier", 
  ],
  "overrides": [
    {
      "files": ["**/*.less"],
      "customSyntax": require("postcss-less"),
      "rules": {
        'comment-empty-line-before': null,
        'declaration-empty-line-before': null,
        'function-name-case': 'lower',
        'no-descending-specificity': null,
        'no-invalid-double-slash-comments': null,
        'rule-empty-line-before': 'always',
      }
    }
  ],
  plugins: ["stylelint-less"], 
  rules: {
    "block-no-empty": null,  // 不检测 禁止出现空块 规则
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色
    "max-empty-lines": 2,
    'function-url-quotes': 'always',
    'string-quotes': 'double', 
    'indentation': 2,
    'unit-case':null,
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'font-family-no-missing-generic-family-keyword': null,
    'block-opening-brace-space-before':'always',
    'property-no-unknown':null,
    'no-empty-source':null,
  }
};
