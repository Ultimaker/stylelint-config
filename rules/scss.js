module.exports = {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'at-rule-disallowed-list': ['debug'],
        'at-rule-no-unknown': [
            true,
            {
                // allow all SCSS at-rules
                ignoreAtRules: [
                    'use',
                    'forward',
                    'import',
                    'mixin',
                    'include',
                    'function',
                    'return',
                    'extend',
                    'error',
                    'warn',
                    'debug',
                    // flow control
                    'if',
                    'else',
                    'else if',
                    'each',
                    'for',
                    'while',
                ],
            },
        ],
        'color-function-notation': null,
        'declaration-colon-newline-after': null,
        'indentation': 4,
        'selector-class-pattern': null,
        'string-quotes': 'single'
    },
};
