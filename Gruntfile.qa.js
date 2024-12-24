module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean :  {
      build: 'dist/qa',
      css: ['dist/qa/*.css', 'dist/qa/*.css.map'],
      js:  ['dist/qa/*.js', 'dist/qa/*.js.map']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
      },
      build: ['Gruntfile.qa.js', 'src/js/scripts.js'],
    },
    babel: {
      options: {
        sourceMap: false,
      },
      dist: {
        files: {
          'dist/qa/scripts_qa.js': 'src/js/scripts.js',
        }
      }
    },
    concat: {
      options: {
        separator: ';',
        sourceMap: true,
      },
      dist: {
        src: ['src/js/vendor/**/*.js', 'dist/qa/scripts_qa.js'],
        dest: 'dist/qa/scripts_qa.min.js',
      },
    },
    'dart-sass': {
      target: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: [{
          src:  'src/scss/styles.scss',
          dest: 'dist/qa/styles_qa.css'
        }]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')()
        ]
      },
      dist: {
        src: 'dist/qa/*.css'
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
  grunt.registerTask('analytics', function () { grunt.file.copy('src/js/analytics.js', 'dist/qa/analytics_qa.js')});
  grunt.registerTask('build', ['clean:build', 'jshint', 'babel', 'concat', 'dart-sass', 'postcss']);
  grunt.registerTask('default', ['dart-sass', 'postcss']);
  };
