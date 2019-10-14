// Limit language features

module.exports = {
    rules: {
        // Color
        'color-named': 'never',
        'color-no-hex': true,

        // Function
        // 'function-blacklist': [],
        // 'function-url-no-scheme-relative': true,
        // 'function-url-scheme-blacklist': [],
        // 'function-url-scheme-whitelist': [],
        // 'function-whitelist': [],

        // Keyframes
        // 'keyframes-name-pattern': [],

        // Number
        'number-max-precision': 5,

        // Time
        // 'time-min-milliseconds': 100,

        // Unit
        // 'unit-blacklist': [],
        // 'unit-whitelist': [],

        // Shorthand property
        'shorthand-property-no-redundant-values': true,

        // Value
        'value-no-vendor-prefix': true,

        // Custom property
        // 'custom-property-pattern': [],

        // Property
        // 'property-blacklist': [],
        'property-no-vendor-prefix': true,
        // 'property-whitelist': [],

        // Declaration
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': {
            // line-height should be unitless
            'line-height': [
                'ch',
                'em',
                'ex',
                'rem',
                '%',
                'px',
                'cm',
                'mm',
                'in',
                'pc',
                'pt',
                'vh',
                'vw',
                'vmin',
                'vmax',
            ],
        },
        // 'declaration-property-unit-whitelist': {},
        'declaration-property-value-blacklist': {
            // Only transition what needs to be transitioned
            '/^transition/': ['/all/'],
            // On inherited properties, the initial value may be unexpected.
            '/.+/': ['initial'],
        },
        // 'declaration-property-value-whitelist': {},

        // Declaration block
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-single-line-max-declarations': 1,

        // Selector
        // 'selector-attribute-operator-blacklist': [],
        // 'selector-attribute-operator-whitelist': [],
        // 'selector-class-pattern': string,
        // 'selector-combinator-blacklist': [' '],
        // 'selector-combinator-whitelist': [],
        // 'selector-id-pattern': '',
        // 'selector-max-attribute': int,
        // 'selector-max-class': int,
        // 'selector-max-combinators': 1,
        // 'selector-max-compound-selectors': 2,
        'selector-max-empty-lines': 0,
        'selector-max-id': [
            0,
            {
                message: 'Usage of ID selectors is not allowed',
            },
        ],
        // 'selector-max-pseudo-class': int,
        // 'selector-max-specificity': string,
        // 'selector-max-type': int,
        // 'selector-max-universal': int,
        // 'selector-nested-pattern': string,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: ['attribute'],
            },
        ],
        // 'selector-no-vendor-prefix': true,
        // 'selector-pseudo-class-blacklist': [],
        // 'selector-pseudo-class-whitelist': [],
        // 'selector-pseudo-element-blacklist': [],
        // 'selector-pseudo-element-whitelist': [],

        // Media feature
        // 'media-feature-name-blacklist': [],
        // 'media-feature-name-no-vendor-prefix': true,
        // 'media-feature-name-value-whitelist': {},
        // 'media-feature-name-whitelist': [],

        // Custom media
        // 'custom-media-pattern': /^[a-z][a-z0-9\-]+[^\-]$/,

        // At-rule
        // 'at-rule-blacklist': [],
        'at-rule-no-vendor-prefix': true,
        // 'at-rule-property-requirelist': {},
        // 'at-rule-whitelist': [],

        // Comment
        // 'comment-word-blacklist': [],

        // General
        'max-nesting-depth': [
            1,
            {
                severity: 'warning',
            },
        ],
        'no-unknown-animations': true,
    },
};
