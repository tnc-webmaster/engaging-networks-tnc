module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        browser: true,
        esversion: 6,
        reporter: require('jshint-stylish'),
      },
      build: ['Gruntfile.js', 'src/js/scripts.js'],
    },
    babel: {
      options: {
        sourceMap: false,
      },
      dist: {
        files: {
          'dist/js/scripts.js': 'src/js/scripts.js',
        }
      }
    },
    concat: {
      options: {
        separator: ';',
        sourceMap: true,
      },
      //vendor: {
      //  src: ['src/js/vendor/**/*.js'],
      //  dest: 'dist/js/vendor.js',
      //},
      //dist: {
      //  src: ['dist/js/scripts.js'],
      //  dest: 'dist/js/scripts.min.js',
      //},
      dist: {
        src: ['src/js/vendor/**/*.js', 'dist/js/scripts.js'],
        dest: 'dist/js/scripts.min.dev.js',
      },
    },
    'dart-sass': {
      target: {
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
        },
        files: {
          'dist/css/styles.dev.css': 'src/scss/styles.scss',
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')(),
          require('cssnano')(),
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },
    critical: {
      test: {
        options: {
          base: 'dist/css',
          css: [
            'dist/css/styles.dev.css'
          ],
          width: 1420,
          height: 1024,
          target: {
            html: 'critical.css',
            uncritical: 'noncritical.css',
          },
          ignore: {
            atrule: ['@font-face'],
            decl: (node, value) => /url\(/.test(value),
          },

        },
        src: 'https://preserve.nature.org/page/75242/donate/1',
        dest: 'dist/css/critical.css'
      }
    },
    watch: {
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['dart-sass', 'postcss']
      },
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'babel', 'concat']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('css', ['dart-sass', 'postcss']);
  grunt.registerTask('js', ['jshint', 'babel', 'concat']);
  grunt.registerTask('default', ['dart-sass', 'postcss']);
};