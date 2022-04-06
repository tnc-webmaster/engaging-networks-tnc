# Engaging Networks - TNC

(Repo cloned from Zuri on 3/23/22)

## Installation

Install packages.

```bash
npm install
```
Production files are compiled to `dist` folder:

JS to `dist/scripts.min.[CURRENT-DATE].js` and CSS to `dist/styles.[CURRENT-DATE].css`

## Usage
All tasks are defined in Gruntfile.js
```python
# watches for file changes in src/scss/**/*.scss and src/js/**/*.js
grunt w

# compiles src/scss/styles.scss into dist/styles.[CURRENT-DATE].css
grunt css

# compiles src/js/vendor/**/*.js and src/js/scripts.js into dist/scripts.min.[CURRENT-DATE].js
grunt js
```
