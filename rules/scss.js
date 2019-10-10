module.exports = {
    rules: {
        'at-rule-blacklist': ['debug', 'extend'],
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
    },
};
