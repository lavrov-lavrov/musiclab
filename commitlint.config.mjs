export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // bugfix
        'docs', // documentation
        'style', // formatting
        'refactor', // refactoring
        'test', // tests
        'chore', // helpers
        'ci', // CI-processes
        'perf', // performance optimization
        'revert', // commit revert
        'wip', // work in process
      ],
    ],
  },
};
