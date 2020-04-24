# Ultimaker stylelint config

This package contains mostly sane linting rules for both CSS and SCSS files for
Ultimaker web-based projects.

These linting rules are set up to allow the writing of consistent, readable, and
simple CSS or SCSS.

## Usage

To use these linting rules, create a file called `.stylelintrc.js` in the root
of your project.

To lint CSS files, add the following:

```javascript
module.exports = {
    extends: "@ultimaker/stylelint-config"
};
```

To lint SCSS files, add the following:

```javascript
module.exports = {
    extends: "@ultimaker/stylelint-config/scss"
};
```


## Publishing
Publishing works the same way as we have implemented in [stardust-web](https://github.com/Ultimaker/stardust-web/blob/master/docs/publishing.md).
