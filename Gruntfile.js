module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    webmake: {
        app: {
          files: {
            'css-scroll.js': ['lib/main.js']
          }
        }
      }
  });
  
  grunt.loadNpmTasks('grunt-webmake');
  
  grunt.registerTask('default', ['webmake']);

};