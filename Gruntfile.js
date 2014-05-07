module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/wireframe.css': 'src/scss/wireframe.scss',
          'assets/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/scss/*.scss', 'src/scss/wireframe/*.scss'],
        tasks: ['sass']
      }
    }
  });
  
  // Load task plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['sass']);
};