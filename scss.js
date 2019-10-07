module.exports = {
    extends: ['./rules/scss.js', './index.js'],
    rules: {
        // At-rules
        'at-rule-blacklist': ['debug', 'extend'],
        'at-rule-no-unknown': [
            true,
            {
                // this set excludes '@extend'
                ignoreAtRules: [
                    'use',
                    'forward',
                    'import',
                    'mixin',
                    'include',
                    'function',
                    'return',
                    'error',
                    'warn',
                    'debug',
                    'if',
                    'else',
                    'each',
                    'for',
                    'while',
                ],
            },
        ],
    },
};
