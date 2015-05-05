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
              "public/css/grunt/font-a/css/font-awesome.min.css",
              "public/css/styles1.min.css",
              "public/css/styles3.min.css",
              "public/css/angucomplete.css",
              "public/css/main.css",

              ]
        }
      }
    },
    jshint: {
      beforeconcat: ["client/assets/**/*.js"]
    },
  	concat: {
  		app: {
  			files: {
  				"public/js/app.js": [
             "bower_components/jquery/dist/jquery.js",
             "bower_components/bootstrap/dist/js/bootstrap.js",
             "node_modules/angular/angular.js",
             "node_modules/angular-route/angular-route.js",
             "node_modules/angular-animate/angular-animate.js",
             "bower_components/angular-file-upload/angular-file-upload.js",
             "public/js/plugins/angucomplete-alt.js",
             "bower_components/lodash/dist/lodash.js",
             "bower_components/restangular/dist/restangular.js",
             "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
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
             "node_modules/angular-animate/angular-animate.js",
             "bower_components/angular-file-upload/angular-file-upload.js",
             "public/js/plugins/angucomplete-alt.js",
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
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint","concat"]);
  grunt.registerTask("production", ["jshint","uglify","cssmin"]);
};
