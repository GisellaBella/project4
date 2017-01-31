module.exports = function(grunt) {
  grunt.initConfig({
    uncss: {
    dist: {
      files: {
        'public/css/style.css': ['public/index.html', 'public/templates/italian/new.html', 'public/templates/italian/show.html', 'public/templates/italian/index.html']
      }
    }
  }
});
  grunt.loadNpmTasks('grunt-uncss');
  grunt.registerTask('default', 'uncss');
};