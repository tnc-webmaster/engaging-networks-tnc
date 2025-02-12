# Engaging Networks - TNC

(Repo cloned from Zuri on 3/23/22)

## Installation

Install packages.

```bash
npm install
```
Production, Stage, QA, and Dev files are compiled to `dist` folder:

Production
Analytics to `dist/prod/analytics.js`
CSS to `dist/prod/styles.css`
JS to `dist/prod/scripts.min.js` 

Lower Environments (Stage, QA, and Dev)
Analytics to `dist/ENV_NAME/analytics_ENV.js`
CSS to `dist/ENV_NAME/styles_ENV.css`
JS to `dist/ENV_NAME/scripts_ENV.min.js`

## Usage
All tasks are defined in Gruntfile.ENV_NAME.js files. There is one file
available for each environment, which are used to generate their respective
versions of the Analytics, CSS, and JS files.
```bash
# watches for file changes in src/scss/**/*.scss and src/js/**/*.js
npm run watch

###### Production Script ######
# compiles src/js/analytics.js into dist/prod/analytics.js
# compiles src/scss/styles.scss into dist/prod/styles.css
# compiles src/js/vendor/**/*.js and src/js/scripts.js into dist/prod/scripts.min.js
npm run build-prod

###### Stage Script ######
# compiles src/js/analytics.js into dist/stage/analytics.js
# compiles src/scss/styles.scss into dist/stage/styles.css
# compiles src/js/vendor/**/*.js and src/js/scripts.js into dist/stage/scripts.min.js
npm run build-stage

###### QA Script ######
# compiles src/js/analytics.js into dist/qa/analytics.js
# compiles src/scss/styles.scss into dist/qa/styles.css
# compiles src/js/vendor/**/*.js and src/js/scripts.js into dist/qa/scripts.min.js
npm run build-stage

###### Dev Script ######
# compiles src/js/analytics.js into dist/dev/analytics.js
# compiles src/scss/styles.scss into dist/dev/styles.css
# compiles src/js/vendor/**/*.js and src/js/scripts.js into dist/dev/scripts.min.js
npm run build-stage

```
