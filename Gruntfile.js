module.exports = function(grunt) {
	// load time-grunt and all grunt plugins found in the package.json
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		clean: ["tmp", "www"],
		uncss: {
			dist: {
				files: {
					'tmp/tidy.css': ['index.html']
				}
			}
		},
		concat: {
			dist: {
				src: [
					'bower_components/bootstrap/dist/css/bootstrap.css',
					'bower_components/video-js/dist/video-js/video-js.min.css',
					'css/style.css'
				],
				dest: 'tmp/main.css'
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			dist: {
				src: 'tmp/main.css',
				dest: 'www/main.css'
			}
		},
		uglify: {
			my_target: {
				options: {
					beautify: false,
					mangle: true
				},
				files: {
					'www/output.js': [
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/jquery_lazyload/js/jquery.lazyload.js',
						'bower_components/animatescroll/animatescroll.js',
						'js/decorate-links.js',
						'js/google-analytics.js',
						'bower_components/video-js/dist/video-js/video.js'
					]
				}
			}
		},
		processhtml: {
			dist: {
				files: {
					'tmp/index.min.html': ['index.html']
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'www/index.html': 'tmp/index.min.html'
				}
			}
		},
		copy: {
			main: {
				files: [
					// includes files within path and its sub-directories
					{
						expand: true,
						src: ['img/**'],
						dest: 'www'
					}, {
						expand: true,
						src: ['bower_components/video-js/dist/video-js/font/**'],
						dest: 'www/font/',
						flatten: true
					}, {
						expand: true,
						src: ['favicon.ico'],
						dest: 'www'
					},
				],
			},
		},
		filerev: {
			dist: {
				src: [
					'www/*.js',
					'www/*.css',
					'www/img/**/*.{png,jpg,JPG,jpeg,gif,webp,svg}',
					'www/font/*'
				]
			}
		},
		filerev_replace: {
			options: {
				assets_root: 'www'
			},
			compiled_assets: {
				src: 'www/*.{css,js}'
			},
			views: {
				src: 'www/index.html'
			}
		},
		watch: {
			files: [
				'Gruntfile.js',
				'.csslintrc',
				'css/*.css',
				'js/*.js',
				'*.json',
				'libs/**/*',
				'index.html',
			],
			tasks: [
				'default','serve'
			],
			options: {
				spawn: true,
				interrupt: true,
				atBegin: true,
				livereload: false
			}
		},
		devUpdate: {
			main: {
				options: {
					updateType: 'report', //just report outdated packages
					reportUpdated: false, //don't report up-to-date packages
					semver: true, //stay within semver when updating
					packages: {
						devDependencies: true, //only check for devDependencies
						dependencies: false
					},
					packageJson: null, //use matchdep default findup to locate package.json
					reportOnlyPkgs: [] //use updateType action on all packages
				}
			}
		},
		serve: {
			options: {
				port: 9000,
				'path': 'www'
			}
		}
	});

	grunt.loadNpmTasks('grunt-dev-update');
	grunt.loadNpmTasks('grunt-filerev-replace');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-uncss');

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// register custom grunt tasks

	grunt.registerTask('default', [
		'clean',
//		'uncss',
		'concat',
		'cssmin',
		'uglify',
		'processhtml',
		'htmlmin',
		'copy',
		'filerev',
		'filerev_replace'
	]);
};
