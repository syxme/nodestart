/*global module:true*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
	concat: {
		app: {
			files: {
				"public/js/app.js": [
					"client/assets/**/*.js"
				]
			}
		}
	},
	 uglify: {
      app: {
        options: {
          preserveComments: false,
          wrap: false
        },
        files: {
          "public/js/app.js": [
				"client/assets/**/*.js"
			]
        }
      }
    }
  });


  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", [ "concat"]);
  grunt.registerTask("production", ["uglify"]);
};
