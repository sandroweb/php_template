module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		stylus: {

			compile: {

				files: {
					'assets/publish/css/main.min.css': ['assets/sources/css/*.styl']
				},

				options: {
					compress: true
				}

			}

		},

		uglify: {
			compress: {
			//build: {
				files: {
					'assets/publish/js/main.min.js': ['assets/sources/js/**/*.js', 'assets/sources/js/*.js']
				},
				options: {
					mangle: false
				}
			}
		},

		watch: {
			scripts: {
				files: ['assets/sources/js/*.js', 'assets/sources/js/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['assets/sources/css/*.styl','assets/sources/css/**/*.styl'],
				tasks: ['stylus'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify', 'stylus']);
};