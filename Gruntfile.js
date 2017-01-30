module.exports = function(grunt) {
  grunt.initConfig({
    uncss: {
    dist: {
      files: {
        'public/css/styles.css': ['public/newindex.html']
      }
    }
  }
});
  grunt.loadNpmTasks('grunt-uncss');
  grunt.registerTask('default', 'uncss');
};