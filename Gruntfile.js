module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    qunit: {
      files: ['test/index.html']
    },
    uglify: {
      js: {
        files: {
          'jquery.travelmap.min.js': ['jquery.travelmap.js']
        }
      }
    }
  });

  grunt.registerTask('test', 'qunit');
  grunt.registerTask('default', ['uglify', 'qunit']);
};
