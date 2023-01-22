import TextLintTester from 'textlint-tester';

const tester = new TextLintTester();

const testConfig = {
  rules: [
    {
      ruleId: 'prh',
      rule: require('textlint-rule-prh'),
      options: {
        rulePaths: [
          './src/prh.yml'
        ]
      },
    },
  ]
}

// 辞書が正しくロードされていることだけを確認する
tester.run('prh rule file', testConfig, {
  valid: [
    '亜夜',
    '松浦亜弥',
  ],
  invalid: [
    {
      text: '亜弥',
      errors: [{
        message: '亜弥 => 亜夜'
      }]
    },
    {
      text: '務中辰巳',
      errors: [{
        message: '務中辰巳 => 棟方愛海'
      }]
    },
  ]
});
