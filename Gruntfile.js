module.exports = function(grunt) {
  
  grunt.initConfig({
    watch: {
      files: './src/**',
      tasks: ['requirejs']
    },

    requirejs: {
      compile_top: {
        options: {
          name : 'main',  // mainで読み込むjsのpath
          baseUrl: "./src/js",
          mainConfigFile: './src/js/main.js',
          out: "./build/toppage.js"
        }
      },

      compile_page1: {
        options: {
          name : 'page1/main',  // mainで読み込むjsのpath
          baseUrl: "./src/js",
          mainConfigFile: './src/js/page1/main.js',
          out: "./build/page1.js"
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
}