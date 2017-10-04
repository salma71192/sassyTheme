module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'style-humanreadable.css' : 'sass/style.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'style.css' : 'sass/style.scss'
        }
      }
    }, 

    watch: {
          css: {
            files: '**/*.scss',
            tasks: ['sass']
          }
    }
  });

 // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};