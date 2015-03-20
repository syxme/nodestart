/*global module:true*/
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    cssmin: {
      compress: {
        options: {
          keepSpecialComments: "0"
        },
        files: {
            "public/css/app.css": [
              "public/css/style.css"
              ]
        }
      }
    },

	concat: {
		app: {
			files: {
				"public/js/app.js": [
          "bower_components/jquery/dist/jquery.js",
          "bower_components/bootstrap/dist/js/bootstrap.js",
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
            "bower_components/jquery/dist/jquery.js",
            "bower_components/bootstrap/dist/js/bootstrap.js",
  				  "client/assets/**/*.js"
            
			    ]
        }
      }
    }
  });


  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", [ "concat"]);
  grunt.registerTask("production", ["uglify","cssmin"]);
};
