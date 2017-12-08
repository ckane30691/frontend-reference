# Reference Repo

This is a repo to use as a reference for starting small scale front-end projects and coding challenges.

## Creating a new project
1. Create the folder/repo
2. `git init`
    * Update .gitignore
        * `node_modules/`
        * `bundle.js`
3. `git remote add` the proper remote
4. `npm init -y`
5. `npm install --save webpack jquery`
6. Add `"webpack": "webpack --watch",` to `"scripts":` in `package.json` file
7. Create a `webpack.config.js` file
    ```
    module.exports = {
    entry: './lib/entry.js',
    output: {
        filename: './lib/bundle.js'
    },
    devtool: 'source-map'
    }
    ```
8. Create index.html file
    ```
    <html>
        <head>
            <title>Practice Project</title>
            <link rel="stylesheet" href="css/style.css">
            <meta charset="utf-8">
        </head>
        <body>
            <script type='application/javascript' src='lib/bundle.js'></script>
        </body>
    </html>
    ```
9. Create `lib` folder
    * Create `entry.js`
        * `document.addEventListener("DOMContentLoaded", () => {}`
10. Create `css` folder
    * `style.css`
12. Run `npm run webpack` from the terminal
13. Open `index.html`

### Importing and Exporting
1. Use `module.exports = MyClass` for exports
2. Use `const MyClass = require('./myclass.js)` for imports