
# Ultimaker Stylelint Config

*Linting rules for both **CSS** and **SCSS** files of Ultimaker web-based projects.*

<br>

## Usage

Create a file called  `.stylelintrc.js`  in the root of your project.

<br>

Add this to lint **CSS** files.

```javascript
module.exports = {
    extends : '@ultimaker/stylelint-config'
};
```

<br>

Add this to lint **SCSS** files.

```javascript
module.exports = {
    extends : '@ultimaker/stylelint-config/scss'
};
```

<br>
<br>

## Publishing

Works the same way as we have implemented in **[Stardust-Web]**.


<br>

<!----------------------------------------------------------------------------->

[Stardust-Web]: https://github.com/Ultimaker/stardust-web/blob/master/docs/publishing.md
