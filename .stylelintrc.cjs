
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
        'rule-empty-line-before': 'never',
      }
    }
  ],
  plugins: ["stylelint-less"], 
  rules: {
    "block-no-empty": null,  // 不检测 禁止出现空块 规则
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色
    'indentation': 2,
    'block-opening-brace-space-before':'always',
  }
};
