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
          'dist/scripts.js': 'src/js/scripts.js',
        }
      }
    },
    concat: {
      options: {
        separator: ';',
        sourceMap: true,
      },
      dist: {
        src: ['src/js/vendor/**/*.js', 'dist/scripts.js'],
        dest: 'dist/scripts.min.sprint8910.js',
      },
    },
    'dart-sass': {
      target: {
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
        },
        files: {
          'dist/styles.sprint8910.css': 'src/scss/styles.scss',
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('css', ['dart-sass', 'postcss']);
  grunt.registerTask('js', ['jshint', 'babel', 'concat']);
  grunt.registerTask('default', ['dart-sass', 'postcss']);
};