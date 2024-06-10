# electron-template

**Architecture.**

A basic Electron application needs just these files:

- `package.json` - Project Details and Dependencies (node.js).
- `main.js` - Initializes the application window,  is also responsible for all **main process** settings.
- `pages` - Contains an index directory which has the **html, css and js** files for the composition of the homepage, for new pages  is recommended to create a new directory with the same structure.
- `preload` - Directory containing the project **preload files**.
- `static` - Directory for **images** and other project **static files**.
- `tests` - Directory containing the **test files**.

**Commands.**
- `npm run make page Name` - Generates a new directory within the pages directory, containing three files, html, css and js.
- `npm start` - run electron application.
- `npm test` - run electron application with mocha testing.
- `npm run doc` - Generates documentation based on specific comments in the code (see Documentation example)


## To Use

Use [Git](https://git-scm.com) to clone this repository

```bash
# Clone this repository
git clone https://github.com/arturfarias/electron-template ProjectName
# Go into the repository
cd ProjectName
# Install dependencies
npm install
# Run the app
npm start
```

## Documentation example
More information about the documentation in [JSDoc](https://jsdoc.app/)

**The simplest documentation is just a description**
```javascript
/** This is a description of the foo function. */
function foo() {
}
```

**Use a JSDoc tag to describe your code**
```javascript
/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}
```

**Adding more information with tags**
```javascript
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```