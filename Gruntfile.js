module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean :  {
      build: 'dist',
      css: ['dist/*.css', 'dist/*.css.map'],
      js:  ['dist/*.js', 'dist/*.js.map']
    },
    jshint: {
      options: {
        browser: true,
        esversion: 11,
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
        dest: 'dist/scripts.min.js',
      },
    },
    'dart-sass': {
      target: {
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
        },
        files: [{
          src:  'src/scss/styles.scss',
          dest: 'dist/styles.css'
        }]
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
        src: 'dist/*.css'
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

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('w', ['watch']);
  grunt.registerTask('css', ['clean:css', 'dart-sass', 'postcss']);
  grunt.registerTask('js', ['clean:js', 'jshint', 'babel', 'concat']);
  grunt.registerTask('build', ['clean:build', 'jshint', 'babel', 'concat', 'dart-sass', 'postcss']);
  grunt.registerTask('default', ['dart-sass', 'postcss']);
};
