module.exports = function(grunt) {
  
  grunt.initConfig({
    // concat: {
    //   basic: {
    //     src: ['src/main.js'],
    //     dest: 'dist/basic.js'
    //   },
    //   extras: {
    //     src: ['src/main.js', 'src/extras.js'],
    //     dest: 'dist/with_extras.js'
    //   }
    // }
    requirejs: {
      compile: {
        options: {
          name : 'main',
          baseUrl: "./src/js",
          mainConfigFile: './src/js/main.js',
          out: "./build/out.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
}