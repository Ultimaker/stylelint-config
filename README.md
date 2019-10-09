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

To publish a new version run `npm version` with the appropriate parameters (see
[npm-version](https://docs.npmjs.com/cli/version)). This will update
`package.json` for you, commit it and create an annotated tag. After pushing, CI
will pick this up and automatically publish to the npm registry. Next go to
[releases](https://github.com/Ultimaker/stylelint-config/releases) on GitHub and
document the changes.

### Example

The following example will bump the minor version number.

```shell
$ npm version minor
$ git push --follow-tags
```

> **Note:** This version will be published as soon as your changes are merged to
> `master`.

### Example: _alpha_ version

The following example will explicitly set the version to `1.0.0-alpha.4`.

```shell
$ npm version 1.0.0-alpha.4
$ git push --follow-tags
```

> **Note:** This version will be published to the npm registry while you are
> still working on your branch.

> **Note:** Alpha versions cannot be bumped automatically using `npm version`.
