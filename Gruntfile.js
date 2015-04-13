module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
			dist: {
				files: {
					'styles/style.css' : 'styles/style.scss'
				}
			}
		},
		jshint: {
		    all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js']
		},
		handlebars: {
		    all: {
		        files: {
		            "./templates.js": ["app/**/*.handlebars"]
		        }
		    }
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			js: {
				files: '**/*.js',
				tasks: ['jshint']
			},
			handlebars: {
				files: '**/*.handlebars',
				tasks: ['handlebars']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['jshint', 'watch']);
};
