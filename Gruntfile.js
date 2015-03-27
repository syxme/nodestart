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
              "public/css/grunt/style.css",
              "public/css/grunt/bootstrap.css",
              "public/css/grunt/sb-admin.css",
              "public/css/grunt/plugins/mirrors.css",
              "public/css/grunt/font-a/css/font-awesome.min.css"
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
           "node_modules/angular/angular.js",
           "node_modules/angular-route/angular-route.js",
           "bower_components/lodash/dist/lodash.js",
           "bower_components/restangular/dist/restangular.js",
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
           "node_modules/angular/angular.js",
           "node_modules/angular-route/angular-route.js",
           "bower_components/lodash/dist/lodash.js",
           "bower_components/restangular/dist/restangular.js",
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
